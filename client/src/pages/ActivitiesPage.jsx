import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/ActivityForm";

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
      <div className="my-5">
        <ActivityList activities={activities} />
      </div>
      {activities.map((activities) => (
        <div key={activities._id} className="card mb-1">
          {/* <h4 className="card-header bg-primary text-light p-2 m-0">
            {activities.name} <br />
          </h4> */}
          <div className="card-body bg-light p-1">
            <p>{activities.description}</p>
            <p>{activities.activitydate}</p>
            <p>{activities.subject}</p>
            <p>{activities.type}</p>
          </div> 
        </div>
      ))}

      {/* <h3 className="card-header bg-dark text-light p-2 m-0">
        {activities.name} hi <br />
        </h3> */}
      {/* <div className="my-5"> */}
      {/* <ActivityForm activityid={activity._id} /> */}
      {/* </div> */}
      {/* {Activities.map((Activities) => (
            <div key={Activities._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                    {Activities.name} <br />
                </h4>
                <div className="card-body bg-light p-2">
                    <p>{Activities.description}</p>
                </div>  */}
      {/* // <div className="my-5">
        // {activities.description}
        // </div> */}
    </div>
  );
};

export default Activities;
