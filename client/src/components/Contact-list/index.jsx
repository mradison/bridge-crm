import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_CONTACT } from "../../utils/mutations";

const Contactlist = ({ contacts }) => {
  if (!contacts.length) {
    return <h3>No contacts exist</h3>;
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
            <h4>
              {contacts.name}
            </h4>

            <p>{contacts.nickname}</p>
            <p>{contacts.businessphone}</p>
            <p>{contacts.email}</p>
            <p>{contacts.group}</p>
            <p>{contacts.activity}</p>

            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/Contacts/${contacts._id}`}
            >
              View Contact
            </Link>
            <br />
            <button
              className="btn btn-primary btn-block py-3"
              onClick={() => handleDeleteContact(contacts._id)}
            >
              Delete this Contact!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contactlist;
