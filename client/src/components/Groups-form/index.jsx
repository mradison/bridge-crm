import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// TODO: ADD MUTATION NAME FORM MUTATION.JS
import { ADD_GROUP } from '../../utils/mutations';
import { QUERY_GROUPS } from '../../utils/queries';

import Auth from '../../utils/auth';

const GroupsForm = () => {
    const [ groupName , setGroupName] = useState('');
    const [ groupDescription , setgroupDescription] = useState('');

    // TODO:ADD MUTATION NAME LINE 14
    const [ addGroup, { error }] = useMutation
    (ADD_GROUP, {
      refetchQueries: [
        QUERY_GROUPS,
        'groups',
      ]
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
          const { data } = await addGroup ({
            variables: {
              newGroup: {name: groupName, description: groupDescription}
            },
          });
    
          setGroupName('');
          setgroupDescription('');

        } catch (err) {
          console.error(err);
        }
      };
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'groupName') {
          setGroupName(value);
        }
        if (name === 'groupDescription') {
          setgroupDescription(value);
        }
        };

    return (
        <div>
            <h3> Fill out Group form below </h3>

            {Auth.loggedIn() ? (
                <>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label for="Groups">Group</label>
                    </div>

                    <div>
                        <input
                        name="groupName"
                        placeholder="Group Name"
                        // TODO: ADD VALUE
                        value={groupName}
                        onChange={handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <input
                        name="groupDescription"
                        placeholder="Group Description"
                        // TODO: ADD VALUE
                        value={groupDescription}
                        onChange={handleChange}
                        >
                        </input>
                    </div>
                    
                    <div className="col-12 col-lg-3">
                  <button className="btn btn-primary btn-block py-3" type="submit">
                    Add Group
                  </button>
            </div>
                </form>
                </>
                ) : (
                  <p>
                    You need to be logged in to share your thoughts. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                  </p>
                )}
        </div>
    );

};

export default GroupsForm;