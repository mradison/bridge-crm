import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { DELETE_GROUP } from '../../utils/mutations';

const Grouplist = ({groups}) => {
    //console.log(props);
  if (!groups.length) {
    return <h3>No Groups Exist</h3>;
  }

  const[ deleteGroup ] = useMutation( DELETE_GROUP )

  const handleDeleteGroup = async (groupId) => {
    
    try {
      await deleteGroup({
        variables: {
          groupId
        },
       
      });     
      window.location.reload(); 
     
    } catch (err) {
      console.error(err);
    }
  };

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
            <button className="btn btn-primary btn-block py-3"  onClick={() => handleDeleteGroup(groups._id)}>
                      Delete this Group!
                    </button>
            
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Grouplist;