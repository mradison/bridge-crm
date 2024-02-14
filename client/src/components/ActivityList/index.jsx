import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_ACTIVITY } from "../../utils/mutations";

const ActivityList = ({ activities }) => {
  if (!activities.length) {
    return <h3>No Activities exist</h3>;
  }

  const [deleteActivity] = useMutation(DELETE_ACTIVITY);


  const handleDeleteActivity = async (activityId) => {
    console.log("something");
    console.log(activityId);
    try {
      await deleteActivity({
        variables: {
          activityId,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="activitiesTitle display-inline-block text-underline">
        Activities
      </h2>
      <div>
        <div className="contactCards">
          {activities.map((activities) => (
            <div key={activities._id} className="cards">
              <div className="card-body bg-light p-1">
                <p>{activities.type}</p>
                <p>{activities.subject}</p>
                <p>{activities.description}</p>
              </div>
              
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/activities/${activities._id}`}
              >
                <h4 style={{ marginBottom: "15px", color: "lightblue"  }}>View Activity</h4>
              </Link>
              
              <button
                className="btn btn-primary btn-block py-3"
                onClick={() => handleDeleteActivity(activities._id)}
              >
                <h4 style={{ margin: "2px" }}>Delete this Activity!</h4>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
