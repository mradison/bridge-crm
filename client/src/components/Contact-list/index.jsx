import { Link } from "react-router-dom";


// const Contactlist = ({contacts}) => {
    
//     if (!contacts.length) {
//         return <h3>No contacts Exist</h3>;
//     }
    
//     return (
//       <div className="contactCards">
//           <h3>Contacts</h3>
//         {contacts.map((contacts) => (
//           <div key={contacts._id} className="card mb-3">
//               <h4 className="card-header bg-primary text-light p-2 m-0">              
//                     {contacts.name} <br /> 
//               </h4>
//               <div className="card-body bg-light p-2">
//               <p>{contacts.nickname}</p>
//               <p>{contacts.businessphone}</p>
//                 <p>{contacts.email}</p>
//               </div>
//               <Link
//                 className="btn btn-primary btn-block btn-squared"
//                 to={`/Contacts/${contacts._id}`}
//                 >View Contact
//               </Link>
//               <select name="Edit" id="Edit"> 
//               <option>Update</option>
//               <option>Delete</option>
//             </select>
//             </div>
//           ))}
const Contactlist = ({ contacts }) => {
  if (!contacts.length) {
    return <h3>No contacts exist</h3>;
  }

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

        </div>
      ))}
    </div>
    </div>
  );
};

export default Contactlist;
