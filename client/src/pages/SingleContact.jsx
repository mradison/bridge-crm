import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import ContactList from "../components/Contact-list";
import ContactForm from "../components/Contact-form";

import { QUERY_SINGLE_CONTACT, QUERY_CONTACTS } from "../utils/queries";

const SingleContact = () => {
  const { contactid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CONTACT, {
    variables: { contactid: contactid },
  });

  const contact = data?.contact || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
    <div className="my-3">
      <br />
      <div className="my-5" style={{ borderBottom: "2px solid" }}>
        {contact.name} <br />
      </div>
      <br />
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.nickname} 
      </div>
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.email} 
      </div>
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.businessphone} 
      </div>
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.title} 
      </div>
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.company} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.department} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.mobilephone} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.address1} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.address2} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.city} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.state} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.country} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.zip} 
      </div>{" "}
      <div className="m-3 p-4" style={{ margin: "4px" }}>
        {contact.website} <br />
      </div>
      <br />
    </div>
    </main>
  );
};

export default SingleContact;
