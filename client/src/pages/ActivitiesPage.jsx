import { useQuery } from "@apollo/client";

import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/Activity-form";

import { QUERY_ACTIVITIES } from "../utils/queries";

const Activities = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITIES, {});
  const activities = data?.activities || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="my-5">
        <ActivityList activities={activities} />
      </div>
          <ActivityForm className="ContactForm" activityid={activities._id} />
    </main>
  );
};

export default Activities;
