import { useQuery } from '@apollo/client';

import GroupList from '../components/Group-list';
import GroupForm from '../components/Groups-form';

import { QUERY_GROUPS } from '../utils/queries';

const Groups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS, {
  });

  const groups = data?.groups || {};
  //console.log(groups);
  //console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
       <div className="m-3 p-4">
        <GroupForm groupid={groups._id} />
      </div> 
      <div className="my-5">
       <GroupList groups={groups} />
      </div>
    </div>
  );
};

export default Groups;