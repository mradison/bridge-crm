import { useQuery } from "@apollo/client";

import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/Activity-form";

import { QUERY_ACTIVITIES } from "../utils/queries";

const Activities = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES, {});

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
      {/* {activities.map((activities) => (
        <div key={activities._id} className="card mb-1">
          <div className="card-body bg-light p-1">
            <p>{activities.description}</p>
            <p>{activities.activitydate}</p>
            <p>{activities.subject}</p>
            <p>{activities.type}</p>
          </div> 
        </div>
      ))} */}
    <div className="my-3">
      <br />
    </div>

    </div>
  );
};

export default Activities;
