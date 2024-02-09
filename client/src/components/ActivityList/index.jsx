// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from "@apollo/client";

// import {  } from '../../utils/mutations';

// import Auth from '../../utils/auth';

const ActivityList = ({ activities = [] }) => {
    if (!activities.length) {
      return <h3>No Activities Yet</h3>;
    }
  
    return (
      <div>
        <h3 className="p-5 display-inline-block" style={{ borderBottom: '4px dotted #fff' }}>
          Activities
        </h3>
        {/* <div className="flex-row my-4">
          {activities &&
            activities.map((activity) => (
              <div key={activity._id} className="col-12 mb-3 pb-3">
                <div className="p-3 bg-dark text-light">
                  <h5 className="card-header">
                    {activity.activityAuthor} created{' '}
                    <span style={{ fontSize: '0.825rem' }}>
                      on {activity.createdAt}
                    </span>
                  </h5>
                  <p className="card-body">{activity.activityText}</p>
                </div>
              </div>
            ))}
        </div> */}
      </div>
    );
  };

export default ActivityList;
