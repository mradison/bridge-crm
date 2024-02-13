import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from '../../utils/mutations';



const Contactlist = ({ contacts }) => {
  if (!contacts.length) {
    return <h3>No contacts exist</h3>;
  }

  const[ deleteContact ] = useMutation( DELETE_CONTACT )

  const handleDeleteContact = async (contactId) => {
    
    try {
      await deleteContact({
        variables: {
          contactId
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
      <h3 className="activitiesTitle display-inline-block text-underline">Contacts</h3>
    <div className="contactCards">
      {contacts.map((contacts) => (
        <div key={contacts._id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {contacts.name} <br />
          </h4>
          <div className="card-body bg-light p-2">
            <p>{contacts.nickname}</p>
            <p>{contacts.businessphone}</p>
            <p>{contacts.email}</p>
          </div>
          <div>
          <Link
            className="btn btn-primary btn-block btn-squared"
            to={`/Contacts/${contacts._id}`}
          >
            View Contact
          </Link>
          </div>
          <br />
            <div>
            <button className="btn btn-primary btn-block py-3"  onClick={() => handleDeleteContact(contacts._id)}>
                      Delete this Contact!
                    </button>
            
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Contactlist;
