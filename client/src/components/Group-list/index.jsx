import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_GROUP } from "../../utils/mutations";

const Grouplist = ({ groups }) => {
  if (!groups.length) {
    return <h3>No Groups Exist</h3>;
  }

  const [deleteGroup] = useMutation(DELETE_GROUP);

  const handleDeleteGroup = async (groupId) => {
    try {
      await deleteGroup({
        variables: {
          groupId,
        },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 className="activitiesTitle display-inline-block text-underline">
        Groups
      </h2>
        <div className="contactCards">
          {groups.map((groups) => (
            <div key={groups._id} className="cards">
              <h4 className="card-body bg-light p-1">
                {groups.name} <br />
              </h4>
              <p>{groups.description}</p>
              <Link to={`/groups/${groups._id}`}>
                <h4
                  className="btn btn-primary btn-block btn-squared"
                  style={{ margin: "0px", color: "lightblue" }}
                >
                  View Group
                </h4>
              </Link>
              <br />
              <button
                className="btn btn-primary btn-block py-3"
                onClick={() => handleDeleteGroup(groups._id)}
              >
                <h4 style={{ margin: "2px" }}>Delete this Group!</h4>
              </button>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Grouplist;
