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
            <table>
              <tr>
                <td>            
              Type:
              </td>
              <td>
              <input
                name="type"
             type="text"
                value={formData.type}
                onChange={handleChange}
                defaultValue={activity.type}
              />
              </td>
              </tr>
              <tr>
                <td>
              Subject: 
              </td>
              <td>
              <input
                name="subject"
                defaultValue={activity.subject}
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
              </td>
              </tr>
              <tr>
                <td>
              Description: 
              </td>
              <td>
              <textarea
                name="description"
                className="activityDescription"
                value={activity.description}
                onChange={handleChange}
              />
              </td>
              </tr>
            </table>
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Update Activity
              </button>
            </div>
          </form>
          <div>
            <h2>Associate Contact to Activity:</h2>
            <Activitydropdown activity={activity} />
            </div>
          
       

      
          </div>
        </div>
    </main>
  );
};

export default SingleActivity;
