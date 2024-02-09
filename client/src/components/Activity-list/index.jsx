import { Link } from 'react-router-dom';

const Activitylist = ({activities}) => {
  if (!activities.length) {
    return <h3>No Activities Exist</h3>;
  }

  return (
    <div>     
      {activities.map((activities) => (
          <div key={activities._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">              
                  {activities.name} <br /> 
            </h4>
            <div className="card-body bg-light p-2">
              <p>{activities.description}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/Activities/${activities._id}`}
            >View Activity
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Activitylist;