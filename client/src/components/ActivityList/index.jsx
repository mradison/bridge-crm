import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { DELETE_ACTIVITY } from '../../utils/mutations';

const ActivityList = ({activities}) => {
    if (!activities.length) {
      return <h3>No Activities Yet</h3>;
    }

    const[ deleteActivity ] = useMutation( DELETE_ACTIVITY )

    const handleDeleteActivity = async (activityId) => {
      try {
        await deleteActivity({
          variables: {
            activityId
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
      <div className="contactCards">
        {activities.map((activities) => (
        <div key={activities._id} className="cards">
          <h4>{activities.type}</h4>
            <p>{activities.subject}</p>
            <p>{activities.description}</p>
          
          <Link
          className="btn btn-primary btn-block btn-squared"
          to={`/activities/${activities._id}`}>
            View Activity  
          </Link>
          <br />
          <br />
            <button className="btn btn-primary btn-block py-3"  onClick={() => handleDeleteActivity(activities._id)}>
                      Delete this Activity!
                    </button>
        </div>
      ))}
      </div>
      </div>
    );
  };

export default ActivityList;
