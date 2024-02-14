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

  const [formData, setFormData] = useState({
    type: activity.type,
    subject: activity.subject,
    description: activity.description,
  });
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
      window.location.replace("/activities");
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    setactivityUpdated("");
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div style={{ margin: "10px" }}>
        <h2>Associate Contact to Activity:</h2>
        <Activitydropdown activity={activity} />
      </div>
      <div  style={{ padding: "15px", marginBottom: "30px" }}>
        <div className="my-3">
          <form
            onSubmit={handleFormSubmit}
            style={{ padding: "15px", marginTop: "15px" }}
          >
                      <h2 className="h2" htmlFor="Groups">
            Edit Activity
          </h2>
            <table>
              <tr>
                <td>Type:</td>
                <td>
                  <input
                    name="type"
                    type="text"
                    defaultValue={activity.type}
                    value={formData.type}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Subject:</td>
                <td>
                  <input
                    name="subject"
                    type="text"
                    defaultValue={activity.subject}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>
                  <textarea
                    name="description"
                    type="text"
                    defaultValue={activity.description}
                    value={formData.description}
                    className="activityDescription"
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
        </div>
      </div>
    </main>
  );
};

export default SingleActivity;
