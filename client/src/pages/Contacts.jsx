import { useQuery } from '@apollo/client';

import ContactList from '../components/Contact-list';
import ContactForm from '../components/Contact-form';

import { QUERY_CONTACTS } from '../utils/queries';

const Contacts = () => {
  const { loading, data } = useQuery(QUERY_CONTACTS, {
  });

  const contacts = data?.contacts || {};
  console.log(contacts);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {contacts.name}       
      </h3>  
      <div className="my-5">
       <ContactList contacts={contacts} />
      </div>
       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ContactForm contactid={contacts._id} />
      </div> 
    </div>
  );
};

export default Contacts;