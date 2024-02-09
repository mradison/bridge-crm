import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

// import ActivityList from '../components/ActivityList';
// import ActivityForm from '../components/Activity-form';

import { QUERY_SINGLE_ACTIVITY, QUERY_ACTIVITIES } from '../utils/queries';

const SingleActivity = () => {
  const { activityid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
    variables: { activityid: activityid },
  });

  console.log(data);

  const activity = data?.activity || {};

  console.log(activity);

  // if (!loading) {
  // console.log(data);
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (

    <div className="my-3">
    <div className="my-5">
    {activity.name} <br />
    </div>
     <div className="m-3 p-4" style={{ border: '1px dotted #fff' }}>
     {activity.description} <br />
    </div>
    Associate Contact to Activity:
    {/* <Contactdropdown group={group}/> */}
  </div>

    // <div className="my-3">
    //   <h3 className="card-header bg-dark text-light p-2 m-0">
    //     {activity.activityAuthor} <br />
    //     <span style={{ fontSize: '1rem' }}>
    //       created this activity on {activity.createdAt}
    //     </span>
    //   </h3>
    //   <div className="bg-light py-4">
    //     <blockquote
    //       className="p-4"
    //       style={{
    //         fontSize: '1.5rem',
    //         fontStyle: 'italic',
    //         border: '2px dotted #1a1a1a',
    //         lineHeight: '1.5',
    //       }}
    //     >
    //       {activity.activityText}
    //     </blockquote>
    //   </div>

    //   <div className="my-5">
    //     <ActivityList activities={activity.activities} />
    //   </div>
    //   <div className="m-3 p-4" style={{ border: '1px dotted #fff' }}>
    //     <ActivityForm activityid={activity._id} />
    //   </div>
    // </div>
  );
};

export default SingleActivity;
