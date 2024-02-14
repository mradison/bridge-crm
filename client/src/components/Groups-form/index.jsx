import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

// TODO: ADD MUTATION NAME FORM MUTATION.JS
import { ADD_GROUP } from "../../utils/mutations";
import { QUERY_GROUPS } from "../../utils/queries";

import Auth from "../../utils/auth";

const GroupsForm = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setgroupDescription] = useState("");

  // TODO:ADD MUTATION NAME LINE 14
  const [addGroup, { error }] = useMutation(ADD_GROUP, {
    refetchQueries: [QUERY_GROUPS, "groups"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
      const { data } = await addGroup({
        variables: {
          newGroup: { name: groupName, description: groupDescription },
        },
      });

      setGroupName("");
      setgroupDescription("");
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "groupName") {
      setGroupName(value);
    }
    if (name === "groupDescription") {
      setgroupDescription(value);
    }
  };

  return (
    <div>
      <h3 className="activitiesTitle display-inline-block text-underline">
        {" "}
        Fill out Group form below{" "}
      </h3>

      <div className="cardContainer">
        {Auth.loggedIn() ? (
          <>
            <form onSubmit={handleFormSubmit}>
              <div className="h2">
                <h2 className="h2" htmlFor="Groups">
                  Group
                </h2>

                <input
                  name="groupName"
                  placeholder="Group Name"
                  value={groupName}
                  onChange={handleChange}
                ></input>

                <input
                  name="groupDescription"
                  placeholder="Group Description"
                  value={groupDescription}
                  onChange={handleChange}
                ></input>
              </div>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Group
              </button>
              <br />
            </form>
          </>
        ) : (
          <p>
            You need to be logged in to share your thoughts. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default GroupsForm;
