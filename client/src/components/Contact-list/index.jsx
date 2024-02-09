import { Link } from "react-router-dom";

function Contactlist({contacts}) {
    
    if (!contacts.length) {
        return <h3>No contacts Exist</h3>;
    }
    
    return (
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
              <Link
                className="btn btn-primary btn-block btn-squared"
                to={`/Contacts/${contacts._id}`}
              >View Contact
              </Link>
            </div>
          ))}
        </div>
    );
    }
    

export default Contactlist;