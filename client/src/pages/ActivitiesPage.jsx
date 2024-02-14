import { useQuery } from "@apollo/client";

import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/Activity-form";

import { QUERY_ACTIVITIES } from "../utils/queries";

const Activities = () => {

  const { loading, data } = useQuery(QUERY_ACTIVITIES);

  const activities = data?.activities || {};
  console.log(activities);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="my-5">
        <ActivityList activities={activities} />
      </div>

      <div className="my-3">
        <div className="m-3 p-4">
          <ActivityForm activityid={activities._id} />
        </div>
      </div>
    </main>
  );
};

export default Activities;
