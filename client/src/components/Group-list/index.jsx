import { Link } from 'react-router-dom';

const Grouplist = ({groups}) => {
    //console.log(props);
  if (!groups.length) {
    return <h3>No Groups Exist</h3>;
  }

  return (
    <div className="contactCards">  
      <h3>Groups</h3>
      {groups.map((groups) => (
          <div key={groups._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2">              
                  {groups.name} <br /> 
            </h4>
            <div className="card-body bg-light p-2">
              <p>{groups.description}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/groups/${groups._id}`}
            >View Group
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Grouplist;