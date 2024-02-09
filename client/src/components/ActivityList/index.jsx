const ActivityList = ({ activities = [] }) => {
    if (!activities.length) {
      return <h3>No Activities Yet</h3>;
    }
  
    return (
      <div>
        <h3 className="p-5 display-inline-block" style={{ borderBottom: '3px dotted #fff' }}>
          Activities
        </h3>
      </div>
    );
  };

export default ActivityList;
