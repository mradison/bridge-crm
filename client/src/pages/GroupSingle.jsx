import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { QUERY_SINGLE_GROUP, QUERY_CONTACTS } from '../utils/queries';
import Contactdropdown from '../components/Contact-dropdown';

const Groupsingle = () => {

  const { groupid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
    variables: { groupid: groupid },
  });

  const group = data?.group || {};
  //console.log(group);



  if (loading) {
    return <div>Loading...</div>;
  }
  return (

    <div className="my-3">
      <div className="my-5">
      {group.name} <br />
      </div>
       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
       {group.description} <br />
      </div> 
      Associate Contact to Group: 
      <Contactdropdown group={group}/>
    </div>
  );
};

export default Groupsingle;