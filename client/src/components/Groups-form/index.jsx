import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// TODO: ADD MUTATION NAME FORM MUTATION.JS
import {  } from '../../utils/mutations';

import Auth from '../../utils/auth';

const GroupsForm = () => {
    const [GroupText, setGroupText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    // TODO:ADD MUTATION NAME LINE 14
    const [, { error }] = useMutation();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
          const { data } = await ({
            variables: {
                // TODO:EDIT VARIABLES SECTION HERE LINE 25 29
              // Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username 
              GroupAuthor: Auth.getProfile().authenticatedPerson.username
            },
          });
    
          setMUTATIONNAMEHERE('');
        } catch (err) {
          console.error(err);
        }
      };
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'GroupText' && value.length <= 280) {
          setGroupText(value);
          setCharacterCount(value.length);
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
                        placeholder="Group Name"
                        // TODO: ADD VALUE
                        value={}
                        onChange={handleChange}
                        >
                        </input>
                    </div>

                    <div>
                        <input
                        placeholder="Group Description"
                        // TODO: ADD VALUE
                        value={}
                        onChange={handleChange}
                        >
                        </input>
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