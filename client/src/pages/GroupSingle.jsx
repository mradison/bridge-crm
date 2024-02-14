import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_GROUP } from "../utils/mutations";
import { QUERY_SINGLE_GROUP } from "../utils/queries";
import GroupContactdropdown from "../components/GroupContact-dropdown";

const Groupsingle = () => {
  const { groupid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
    variables: { groupid: groupid },
  });

  const group = data?.group || {};
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setgroupDescription] = useState("");
  const [groupUpdated, setgroupUpdated] = useState("");

  // TODO:ADD MUTATION NAME LINE 14
  const [updateGroupInfo, { error }] = useMutation(UPDATE_GROUP);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
      const { data } = await updateGroupInfo({
        variables: {
          newGroupInfo: { name: groupName, description: groupDescription },
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
  const handleChange = (event) => {
    setgroupUpdated("");
    const { name, value } = event.target;

    if (name === "groupName") {
      setGroupName(value);
    }
    if (name === "groupDescription") {
      setgroupDescription(value);
    }
  };

  if (loading) {
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
            <tr>
              <td>
                Group Name: 
              </td>
              <td>
          <input
            name="groupName"
            placeholder={group.name}
            value={groupName}
            onChange={handleChange}
          ></input>
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
            onChange={handleChange}
          ></input>
          </td>
          </tr>
          </table>
        </div>
        <button className="btn btn-primary btn-block py-3" type="submit">
          Update Group
        </button>

        {groupUpdated}
        <br />
      </form>
    </main>
  );
};

export default Groupsingle;
