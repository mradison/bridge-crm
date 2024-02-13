
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { QUERY_CONTACTS } from '../../utils/queries';
import { UPDATE_CONTACT_ACTIVITY } from '../../utils/mutations';

const Activitydropdown = ({activity}) => {
  let [contactid, setContactid] = useState("Select")
  let [savesuccessfull, setsavesuccessfull] = useState()

  console.log(activity);
 
  const [ updatecontactActivity, { error }] = useMutation
  (UPDATE_CONTACT_ACTIVITY);


  let handleContactChange = (e) => {

    console.log(e.target.value);
    setContactid(e.target.value)
    setsavesuccessfull('')
  }

  const handleFormSubmit = async (event) => {
  event.preventDefault();
    try {
      const { data } = await updatecontactActivity ({
        variables: {
          newActivityInfo: {type: activity.type, subject: activity.subject, description: activity.description}, 
          contactId: contactid
        },
      });
    
    setContactid('');
    setsavesuccessfull('Contact Associated')
    } catch (err) {
      console.error(err);
    }
  };


  const { loading, data } = useQuery(QUERY_CONTACTS, {
  });

  const contacts = data?.contacts || {};
  console.log(contacts);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <br />
    <div>    
      <select onChange={handleContactChange}> 
      <option value="Select"> -- Select a Contact -- </option>
         
      {contacts.map((contact) => <option key={contact._id} value={contact._id}>{contact.name}</option>)}
    </select>

    <div>
      <br />
    </div>

    <br />
    <br />

    <button className="btn btn-primary btn-block py-3" type="submit">
                    Associate Activity
   </button>
   <br />
   <div>
   {savesuccessfull}
   </div>
    </div>
    <br />
    </div>
    </form>
  );
};

export default Activitydropdown;