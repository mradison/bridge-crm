import { useQuery } from '@apollo/client';

import GroupList from '../components/Group-list';
import GroupForm from '../components/Groups-form';

import { QUERY_GROUPS } from '../utils/queries';

const Groups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS, {
  });

  const groups = data?.groups || {};
  console.log(groups);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {groups.name}
      </h3>  
      <div className="my-5">
       <GroupList groups={groups} />
      </div>
       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <GroupForm groupid={groups._id} />
      </div> 
    </div>
  );
};

export default Groups;