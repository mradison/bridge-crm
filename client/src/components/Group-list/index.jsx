import { Link } from 'react-router-dom';

const Grouplist = ({groups}) => {
    //console.log(props);
  if (!groups.length) {
    return <h3>No Groups Exist</h3>;
  }

  return (
    <div>
      <br />
       <h3 className="activitiesTitle display-inline-block text-underline">Groups</h3>
    <div className="contactCards">  

      {groups.map((groups) => (
          <div key={groups._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2">              
                  {groups.name} <br /> 
            </h4>
            <div className="card-body bg-light p-2">
              <p>{groups.description}</p>
            </div>
            <br />
            <div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/groups/${groups._id}`}
            >View Group
            </Link>
            </div>
            <br />
            <div>
            <select name="Edit" id="Edit"> 
              <option>Update</option>
              <option>Delete</option>
            </select>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Grouplist;