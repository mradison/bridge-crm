import { useQuery } from '@apollo/client';

import GroupList from '../components/Group-list';
import GroupForm from '../components/Groups-form';

import { QUERY_GROUPS } from '../utils/queries';

const Groups = () => {
  const { loading, data } = useQuery(QUERY_GROUPS, {});
  const groups = data?.groups || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <div className="my-5">
       <GroupList groups={groups} />
      </div>
      <div className="GroupForm">
        <GroupForm groupid={groups._id} />
      </div> 
    </main>
  );
};

export default Groups;