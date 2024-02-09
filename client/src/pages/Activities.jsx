import { useQuery } from '@apollo/client';

import ActivityList from '../components/ActivityList';
import ActivityForm from '../components/Activity-form';

import { QUERY_ACTIVITIES } from '../utils/queries';

const Activities = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES, {
  });

  const activities = data?.activities || {};
  console.log(activities);
  console.log(data);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
       <div className="m-3 p-4">
        <ActivityForm activityid={activities.id} />
      </div> 
      <div className="my-5">
       <ActivityList activities={activities} />
      </div>
    </div>
  );
};

export default Activities;