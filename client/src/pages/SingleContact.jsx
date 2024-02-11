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
    <div className="my-3">
      <br />
      <div className="my-5" style={{ border: "1px dotted #fff" }}>
        {contact.name} <br />
      </div>
      <br />
      <div className="m-3 p-4">
        {contact.nickname} 
      </div>
      <div className="m-3 p-4">
        {contact.email} 
      </div>
      <div className="m-3 p-4">
        {contact.businessphone} 
      </div>
      <div className="m-3 p-4">
        {contact.title} 
      </div>
      <div className="m-3 p-4">
        {contact.company} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.department} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.mobilephone} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.address1} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.address2} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.city} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.state} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.country} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.zip} 
      </div>{" "}
      <div className="m-3 p-4">
        {contact.website} <br />
      </div>
      <br />
    </div>
  );
};

export default SingleContact;
