import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_GROUP } from "../utils/mutations";
import { QUERY_SINGLE_GROUP, QUERY_CONTACTS } from "../utils/queries"; // Import the query to fetch contacts
import GroupContactdropdown from "../components/GroupContact-dropdown";

const Groupsingle = () => {
  const { groupid } = useParams();

  const { loading: groupLoading, data: groupData } = useQuery(QUERY_SINGLE_GROUP, {
    variables: { groupid: groupid },
  });

  const { loading: contactsLoading, data: contactsData } = useQuery(QUERY_CONTACTS); // Fetch contacts data

  const group = groupData?.group || {};
  const contacts = contactsData?.contacts || []; // Extract contacts data

  const [groupName, setGroupName] = useState("");
  const [groupDescription, setgroupDescription] = useState("");
  const [groupUpdated, setgroupUpdated] = useState("");

  // TODO:ADD MUTATION NAME LINE 14
  const [updateGroupInfo, { error }] = useMutation(UPDATE_GROUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    try {
      console.log(`adding this contact to group id: ${groupid}`);
      // Define the group information object
      const groupInfo = {
        groupId: groupid,
        name: groupName,
        description: groupDescription
      };
  
      // TODO: Add logic to push the new groupInfo into the contact document
      const { data } = await updateGroupInfo({
        variables: {
          // Use $push to add the new groupInfo to the existing groupInfo array
          newGroupInfo: { $push: { groupInfo } },
          groupId: groupid,
        },
      });
  
      setgroupUpdated("Group Updated");
      setGroupName("");
      setgroupDescription("");
    } catch (err) {
      console.error(err);
    }
  };
  
  if (groupLoading || contactsLoading) { // Check if either group or contacts are loading
    return <div>Loading...</div>;
  }
  
  return (
    <main>
      <div style={{ margin: "30px" }}>
        <h2>Associate Contact to Group: </h2>
        <GroupContactdropdown group={group} />
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="h2">
          <br />
          <h2 className="h2" htmlFor="Groups">
            Edit Group
          </h2>
          <table>
            <tbody>
              <tr>
                <td>
                  Group Name: 
                </td>
                <td>
                  <input
                    name="groupName"
                    placeholder={group.name}
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Description: 
                </td>
                <td>
                  <input
                    name="groupDescription"
                    placeholder={group.description}
                    value={groupDescription}
                    onChange={(e) => setgroupDescription(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary btn-block py-3" type="submit">
          Update Group
        </button>
        <h2>Contacts in group: </h2>
        <ul>
          
          <table>
                <tbody>
                  <tr>
                  <th>
                    <strong>Name</strong>
                  </th>
                  <th>
                    <strong>Email</strong>
                  </th>
                  </tr>
          {contacts.map(contact => (
            contact.groupInfo && contact.groupInfo.some(groupInfo => groupInfo.groupId === group._id) && (
                  <tr key={contact._id}>
                    <td>
                      {contact.name}
                    </td>
                    <td>
                      {contact.email}
                    </td>
                  </tr>

            )
          ))}
                    </tbody>
              </table>
        </ul>


        {groupUpdated && <div>{groupUpdated}</div>}
      </form>
    </main>
  );
};

export default Groupsingle;
