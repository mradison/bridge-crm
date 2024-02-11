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
    <div>
      <br />
    <div className="my-3">
      <div className="my-5" style={{ borderBottom: "2px solid" }}>
      {group.name} <br />
      </div>
      <br />
       <div className="m-3 p-4">
       {group.description} <br />
      </div> 
      <br />
      <div>
      Associate Contact to Group: 
      </div>
      <Contactdropdown group={group}/>
    </div>
    </div>
  );
};

export default Groupsingle;