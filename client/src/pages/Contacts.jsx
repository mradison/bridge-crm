import { useQuery } from '@apollo/client';

import ContactList from '../components/Contact-list';
import ContactForm from '../components/Contact-form';

import { QUERY_CONTACTS } from '../utils/queries';

const Contacts = () => {
  const { loading, data } = useQuery(QUERY_CONTACTS, {});
  const contacts = data?.contacts || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className="my-5">
       <ContactList contacts={contacts} />
      </div>
        <ContactForm className="ContactForm" contactid={contacts._id} />
    </main>
  );
};

export default Contacts;