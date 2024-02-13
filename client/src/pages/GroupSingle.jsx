import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_GROUP } from '../utils/mutations';
import { QUERY_SINGLE_GROUP, QUERY_CONTACTS } from '../utils/queries';
import Contactdropdown from '../components/Contact-dropdown';

const Groupsingle = () => {

  const { groupid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_GROUP, {
    variables: { groupid: groupid },
  });

  const group = data?.group || {};
  //console.log(group);



    const [ groupName , setGroupName] = useState('');
    const [ groupDescription , setgroupDescription] = useState('');
    const [ groupUpdated , setgroupUpdated] = useState('');

    // TODO:ADD MUTATION NAME LINE 14
    const [ updateGroup, { error }] = useMutation
    (UPDATE_GROUP);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
          const { data } = await updateGroup ({
            variables: {
              newGroupInfo: {name: groupName, description: groupDescription}, groupId: groupid
            },
          });
    
          setgroupUpdated('Group Updated')
          setGroupName('');
          setgroupDescription('');

        } catch (err) {
          console.error(err);
        }
      };
      const handleChange = (event) => {
        setgroupUpdated('')
        const { name, value } = event.target;
    
        if (name === 'groupName') {
          setGroupName(value);
        }
        if (name === 'groupDescription') {
          setgroupDescription(value);
        }
        };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
    <div>
      <br />
    <div className="my-3">
      {/* <div className="my-5" style={{ borderBottom: "2px solid" }}>
      {group.name} <br />
      </div>
      <br />
       <div className="m-3 p-4">
       {group.description} <br />
      </div> 
      <br /> */}
  <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="Groups">Group</label>
                    </div>
                    <br />

                    <div>
                        <input
                        name="groupName"
                        placeholder={group.name}
                        // TODO: ADD VALUE
                        value={groupName}
                        onChange={handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <input
                        name="groupDescription"
                        placeholder={group.description}
                        // TODO: ADD VALUE
                        value={groupDescription}
                        onChange={handleChange}
                        >
                        </input>
                    </div>
                    
                    <div className="col-12 col-lg-3">
                      <br />
                  <button className="btn btn-primary btn-block py-3" type="submit">
                    Update Group
                  </button>
                  <br />
                  {groupUpdated}
                  <br />
                  </div>
                  </form>
                   <br/>
      <div>
      Associate Contact to Group: 
      </div>
      <Contactdropdown group={group}/>
    </div>
    </div>
    </main>
  );
};

export default Groupsingle;