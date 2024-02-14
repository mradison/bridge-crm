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

   <div className="my-3">

      <div className="my-5">
       <ContactList contacts={contacts} />
      </div>
      <div className="my-3">
        <div className="m-3 p-4">
        <ContactForm className="ContactForm" contactid={contacts._id} />
        </div>
      </div>
    </div>
    </main>
  );
};

export default Contacts;