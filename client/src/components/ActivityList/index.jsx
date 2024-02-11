import { Link } from "react-router-dom";

const ActivityList = ({ activities}) => {
    if (!activities.length) {
      return <h3>No Activities Yet</h3>;
    }
  
    return (
      <div>
        <br />
      <h3 className="activitiesTitle display-inline-block text-underline">
      Activities
    </h3>
      <div className="contactCards">
        {activities.map((activities) => (
        <div key={activities._id} className="card mb-1">
          <div className="card-body bg-light p-1">
            <p>{activities.description}</p>
            <p>{activities.activitydate}</p>
            <p>{activities.subject}</p>
            <p>{activities.type}</p>
          </div>
          <Link
          className="btn btn-primary btn-block btn-squared"
          to={`/activities/${activities._id}`}
          >View Activity  
          </Link>
          <select name="Edit" id="Edit"> 
              <option>Update</option>
              <option>Delete</option>
            </select>
        </div>
      ))}
      </div>
      </div>
    );
  };

export default ActivityList;
