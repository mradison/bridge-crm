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

 

  const activity = data?.activity || {};

  
  console.log(activity);
  const [activityUpdated, setactivityUpdated] = useState("");
  
  const [updateActivity, { error }] = useMutation(UPDATE_ACTIVITY);
  
  const [formData, setFormData] =  useState({
    type: activity.type, 
    subject: activity.subject,
    description: activity.description
  })
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateActivity({
        variables: {
          newActivityInfo: formData,
          activityId: activityid,
        },
      });

      setactivityUpdated("Activity Updated");
      // setActivityType("");
      // setActivitySubject("");
      // setactivityDescription("");
      window.location.replace("/activities");
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    setactivityUpdated("");
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})

    // if (name === "type") {
    //   setActivityType(value);
    // }
    // if (name === "subject") {
    //   setActivitySubject(value);
    // }
    // if (name === "activityDescription") {
    //   setactivityDescription(value);
    // }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <h2>Activity</h2>

        <div className="my-3">
          <form
            onSubmit={handleFormSubmit}
            style={{ padding: "15px", marginBottom: "30px" }}
          >
            <div>
              <label htmlFor="activityType">Type</label>
              <input
                name="type"
             type="text"
                value={formData.type}
                onChange={handleChange}
                defaultValue={activity.type}
              />
            </div>

            <div>
              <label htmlFor="activitySubject">Subject</label>
              <input
                name="subject"
                defaultValue={activity.subject}
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
            
                value={formData.description}
                onChange={handleChange}
              >{activity.description}</textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Update Activity
              </button>
            </div>
          </form>
          <div>
            <h2>Associate Contact to Activity:</h2>
            <Activitydropdown activity={activity} />

    <div>
      <br />
      <div className="my-3">
        <form onSubmit={handleFormSubmit}>
          <div className="card">
          <div>
            <h4>
              <label htmlFor="Activities">Edit Activity</label>
            </h4>
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
          </div>
            <br />
            {activityUpdated}
            <br />

          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleActivity;
