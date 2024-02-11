import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { QUERY_SINGLE_ACTIVITY, QUERY_ACTIVITIES } from "../utils/queries";
import Contactdropdown from "../components/Contact-dropdown";

const SingleActivity = () => {
  const { activityid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
    variables: { activityid: activityid },
  });

  // console.log(data);

  const activity = data?.activity || {};

  // console.log(activity);

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
      <div className="m-3 p-4" style={{ borderBottom: "2px solid" }}>
        {activity.description} <br />
      </div>
      <div>
        <br />
      </div>
      Associate Contact to Activity:
      <Contactdropdown activity={activity} />
    </div>
  );
};

export default SingleActivity;
