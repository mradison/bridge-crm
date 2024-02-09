// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import ActivityList from '../components/ActivityList';
// import ActivityForm from '../components/ActivityForm';

// import { QUERY_SINGLE_ACTIVITY } from '../utils/queries';

// const SingleActivity = () => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { activityid } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
//     // pass URL parameter
//     variables: { activityid: activityid },
//   });

//   const activity = data?.activity || {};
//   if (!loading) {
//   console.log(data);
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {activity.activityAuthor} <br />
//         <span style={{ fontSize: '1rem' }}>
//           created this activity on {activity.createdAt}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {activity.activityText}
//         </blockquote>
//       </div>

//       <div className="my-5">
//         <ActivityList activities={activity.activities} />
//       </div>
//       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <ActivityForm activityid={activity._id} />
//       </div>
//     </div>
//   );
// };

// export default SingleActivity;
