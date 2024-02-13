import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_ACTIVITY } from "../utils/mutations";
import { QUERY_SINGLE_ACTIVITY, QUERY_CONTACTS } from "../utils/queries";
import Activitydropdown from "../components/Activity-dropdown";

const SingleActivity = () => {

  const { activityid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
    variables: { activityid: activityid },
  });

  // console.log(data);

  const activity = data?.activity || {};

  const [activityType, setActivityType] = useState("");
  const [activitySubject, setActivitySubject] = useState("");
  const [activityDescription, setactivityDescription] = useState("");
  const [activityUpdated, setactivityUpdated] = useState("");

  const [ updateActivity, { error }] = useMutation(UPDATE_ACTIVITY);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateActivity({
        variables: {
          newActivityInfo: {type: activityType,
            subject: activitySubject,
            description: activityDescription},
            activityId: activityid,
        },
      });

      setactivityUpdated("Activity Updated");
      setActivityType("");
      setActivitySubject("");
      setactivityDescription("");

    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    setactivityUpdated("");
    const { name, value } = event.target;

    if (name === "activityType") {
      setActivityType(value);
    }
    if (name === "activitySubject") {
      setActivitySubject(value);
    }
    if (name === "activityDescription") {
      setactivityDescription(value);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
    <div>
      <br />
      <div className="my-3">
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="Activities">Activity</label>
          </div>
          <br />

          <div>
            <input
              name="activityType"
              placeholder={activity.type}
              value={activityType}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <input
              name="activitySubject"
              placeholder={activity.subject}
              value={activitySubject}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <input
              name="activityDescription"
              placeholder={activity.description}
              value={activityDescription}
              onChange={handleChange}
            ></input>
          </div>

          <div className="col-12 col-lg-3">
            <br />
            <button className="btn btn-primary btn-block py-3" type="submit">
              Update Activity
            </button>
            <br />
            {activityUpdated}
            <br />
          </div>
        </form>
        <br />
        <div>Associate Contact to Activity:</div>
        <Activitydropdown activity={activity} />
      </div>
    </div>
    <div style={{ margin: '15px' }}>
    Associate Contact to Activity:
    <div style={{ margin: '15px' }}>
    <Contactdropdown activity={activity}/>
    </div>
  </main>
  );
};

export default SingleActivity;
