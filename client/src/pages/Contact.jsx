// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

import ContactList from '../components/Contact-list';
import ContactForm from '../components/Contact-form';

import { QUERY_SINGLE_CONTACT } from '../utils/queries';

const SingleContact = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
    const { contactid } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_CONTACT, {
    // pass URL parameter
    variables: { contactid: contactid },
    });

    const contact = data?.contact || {};

    if (loading) {
    return <div>Loading...</div>;
    }
    return (
    <div className="my-3">
        <p>test text to display</p>

        <div className="my-5">
        <ContactList contacts={contact.contacts} />
        </div>
        <div className='fillOutFormSection'>
        <ContactForm 
        contactid={contact._id} 
        />
        </div>
    </div>
    );
};

export default SingleContact;
