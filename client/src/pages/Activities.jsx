import { useQuery } from '@apollo/client';

import ActivityList from '../components/Activitylist';
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
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {activities.name}
      </h3>  
      <div className="my-5">
       <ActivityList activities={activities} />
      </div>
       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ActivityForm activityid={activities._id} />
      </div> 
    </div>
  );
};

export default Activities;