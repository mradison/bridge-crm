import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_ACTIVITY } from "../../utils/mutations";
import { QUERY_ACTIVITIES } from "../../utils/queries";

import Auth from "../../utils/auth";

const ActivityForm = () => {
  const [activityType, setActivityType] = useState("");
  const [activitySubject, setActivitySubject] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  // const [activityDate, setActivityDate] = useState("");
  // const [characterCount, setCharacterCount] = useState(0);

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
    refetchQueries: [QUERY_ACTIVITIES, "activities"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addActivity({
        variables: {
          newActivity: {
            type: activityType,
            subject: activitySubject,
            description: activityDescription,
          },
        },
      });

      setActivityType("");
      setActivitySubject("");
      setActivityDescription("");
      // setActivityDate("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "activityType") {
      setActivityType(value);
    }

    if (name === "activitySubject") {
      setActivitySubject(value);
    }

    if (name === "activityDescription") {
      setActivityDescription(value);
    }
  };

  return (
    <div>
      <h3 className="activitiesTitle display-inline-block text-underline">
        Fill out Activity form below
      </h3>
      <div className="cardContainer">
        {Auth.loggedIn() ? (
          <div className="contactCard" style={{ textAlign: "center" }}>
            <form onSubmit={handleFormSubmit}>
              <div className="h2">
                <h2 className="h2" htmlFor="Activity">
                  Activity
                </h2>
                <input
                  name="activityType"
                  placeholder="Activity Type"
                  value={activityType}
                  onChange={handleChange}
                ></input>

                <input
                  name="activitySubject"
                  placeholder="Activity Subject"
                  value={activitySubject}
                  onChange={handleChange}
                ></input>

                <input
                  name="activityDescription"
                  placeholder="Activity Description"
                  value={activityDescription}
                  onChange={handleChange}
                ></input>
              </div>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Activity
              </button>
              <br />
            </form>
          </div>
        ) : (
          <p>
            You need to be logged in to add the activity details. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityForm;
