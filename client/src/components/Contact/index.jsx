import { useState } from 'react';
import emailValidator from 'email-validator';

function Contact(prop) {
const [NameValue, SetName] = useState('');

const [EmailValue, SetEmail] = useState('');
const [IsValid, SetIsValid] = useState(true);

const [MessageValue, SetMessage] = useState('');



const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValidator.validate(EmailValue)) {
    SetIsValid(true);
    } else {
    SetIsValid(false);
    }
};

return (
    <div>
    <h2 class="contactForm">Contact</h2>
    <form class="contactForm" onSubmit={handleSubmit}>
        <input
        name="Name"
        value={NameValue}
        onChange={(e) => SetName(e.target.value)}
        onBlur={((e) => SetName(e.target.value))}
        placeholder="Enter Name"
        required
        />

        <input
        name="Email"
        value={EmailValue}
        onChange={((e) => SetEmail(e.target.value))}
        onBlur={(e) => SetEmail(e.target.value)}
        placeholder="Enter E-mail"
        required
        />

        <textarea
        id="textTyped"
        placeholder="Write a message here"
        rows="5"
        cols="33"
        name="Message"
        value={MessageValue}
        onChange={(e) => SetMessage(e.target.value)}
        onBlur={((e) => SetMessage(e.target.value))}
        required
        ></textarea>

        <button type="submit">Submit</button>
        {!IsValid && <p>Please enter a valid email address.</p>}
    </form>
    </div>
);
}

export default Contact;