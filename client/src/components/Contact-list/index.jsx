import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_CONTACT } from "../../utils/mutations";

const Contactlist = ({ contacts }) => {
  if (!contacts.length) {
    return <h3>No Contacts exist</h3>;
  }

  const [deleteContact] = useMutation(DELETE_CONTACT);


  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact({
        variables: {
          contactId,
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
        Contacts
      </h2>
      <div className="contactCards">
        {contacts.map((contacts) => (
          <div key={contacts._id} className="cards">
            <div className="card-body bg-light p-1">
              <h4>{contacts.nickname}</h4>
              <p>{contacts.businessphone}</p>
              <p>{contacts.email}</p>
              <p>{contacts.group}</p>
              <p>{contacts.activity}</p>
            </div>

            <Link className="btn btn-primary btn-block btn-squared" to={`/contacts/${contacts._id}`}>            
              <h4  style={{ marginBottom: "15px", color: "lightblue" }}>
                View Contact
              </h4>
            </Link>

            <button
              className="btn btn-primary btn-block py-3"
              onClick={() => handleDeleteContact(contacts._id)}
            >
              <h4 style={{ margin: "2px" }}>Delete this Contact!</h4>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactlist;
