import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_ACTIVITY } from "../../utils/mutations";

import Auth from "../../utils/auth";

const ActivityForm = ({ thoughtId }) => {
  const [activityType, setActivityType] = useState("");
  const [activitySubject, setActivitySubject] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addActivity, { error }] = useMutation(ADD_ACTIVITY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addActivity({
        variables: {
          thoughtId,
          activityType,
          activitySubject,
          activityDescription,
          activityDate,
          activityAuthor: Auth.getProfile().data.username,
        },
      });

      setActivityType("");
      setActivitySubject("");
      setActivityDescription("");
      setActivityDate("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "activityType" && value.length <= 280) {
      setActivityType(value);
      setCharacterCount(value.length);
    }

    if (name === "activitySubject" && value.length <= 280) {
      setActivitySubject(value);
      setCharacterCount(value.length);
    }

    if (name === "activityDescription" && value.length <= 280) {
      setActivityDescription(value);
      setCharacterCount(value.length);
    }

    if (name === "activityDate" && value.length <= 280) {
      setActivityDate(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h4>What do you want the activity details to be?</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="activityType"
                placeholder="Add your activity type"
                value={activityType}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="activitySubject"
                placeholder="Add your activity subject..."
                value={activitySubject}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="activityDescription"
                placeholder="Add your activity description..."
                value={activityDescription}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <textarea
                name="activityDate"
                placeholder="Add your activity date..."
                value={activityDate}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Activity Details
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to add the activity details. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ActivityForm;
