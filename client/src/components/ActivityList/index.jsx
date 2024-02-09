import { Link } from "react-router-dom";

const ActivityList = ({ activities}) => {
    if (!activities.length) {
      return <h3>No Activities Yet</h3>;
    }
  
    return (
      <div>
        <h3 className="p-5 display-inline-block" style={{ borderBottom: '3px dotted #fff' }}>
          Activities
        </h3>
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
        </div>
      ))}
      </div>
    );
  };

export default ActivityList;
