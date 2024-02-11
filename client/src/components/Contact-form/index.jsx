import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import emailValidator from 'email-validator';

// import { QUERY_SINGLE_CONTACT } from '../../utils/mutations';
// import { QUERY_CONTACTS } from '../../utils/queries';

import Auth from '../../utils/auth';

function Contact(props) {
const [NameValue, SetName] = useState('');
const [NicknameValue, SetNickname] =useState('');
const [EmailValue, SetEmail] = useState('');

const [IsValid, SetIsValid] = useState(true);

const [CompanyNameValue, SetCompanyName] = useState('');
const [TitleValue, SetTile] = useState('');
const [DepartmentValue, SetDepartment] = useState('');
const [BusinessPhoneValue, SetBusinessPhone] = useState('');
const [MobilePhoneValue, SetMobilePhone] = useState('');
const [Address1Value, SetAddress1] = useState('');
const [Address2Value, SetAddress2] = useState('');
const [CityValue, SetCity] = useState('');
const [StateValue, SetState] = useState('');
const [CountryValue, SetCountry] = useState('');
const [ZipCodeValue, SetZipCode] = useState('');
const [WebsiteValue, SetWebsite] = useState('');

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
    <h2>Contact</h2>
    <br />
    <p>Fill out the form below</p>
    <br />
    <form className="contactForm" onSubmit={handleSubmit}>
        <input
        name="Name"
        value={NameValue}
        onChange={(e) => SetName(e.target.value)}
        onBlur={((e) => SetName(e.target.value))}
        placeholder="Name"
        required
        />

        <input
        name="Nickname"
        value={NicknameValue}
        onChange={((e) => SetNickname(e.target.value))}
        onBlur={(e) => SetNickname(e.target.value)}
        placeholder="Nickname"
        required
        />
        
        <input
        name="Email"
        value={EmailValue}
        onChange={((e) => SetEmail(e.target.value))}
        onBlur={(e) => SetEmail(e.target.value)}
        placeholder="E-mail"
        required
        />

        <input
        name="CompanyName"
        value={CompanyNameValue}
        onChange={((e) => SetCompanyName(e.target.value))}
        onBlur={(e) => SetCompanyName(e.target.value)}
        placeholder="Company Name"
        required
        />

        <input
        name="Title"
        value={TitleValue}
        onChange={((e) => SetTitle(e.target.value))}
        onBlur={(e) => SetTitle(e.target.value)}
        placeholder="Title"
        required
        />

        <input
        name="Department"
        value={DepartmentValue}
        onChange={((e) => SetDepartment(e.target.value))}
        onBlur={(e) => SetDepartment(e.target.value)}
        placeholder="Department"
        required
        />

        <input
        name="BusinessPhone"
        value={BusinessPhoneValue}
        onChange={((e) => SetBusinessPhone(e.target.value))}
        onBlur={(e) => SetBusinessPhone(e.target.value)}
        placeholder="Business Phone #"
        required
        />

        <input
        name="MobilePhone"
        value={MobilePhoneValue}
        onChange={((e) => SetMobilePhone(e.target.value))}
        onBlur={(e) => SetMobilePhone(e.target.value)}
        placeholder="Mobile Phone #"
        required
        />

        <input
        name="Address1"
        value={Address1Value}
        onChange={((e) => SetAddress1(e.target.value))}
        onBlur={(e) => SetAddress1(e.target.value)}
        placeholder="Address 1"
        required
        />

        <input
        name="Address2"
        value={Address2Value}
        onChange={((e) => SetAddress2(e.target.value))}
        onBlur={(e) => SetAddress2(e.target.value)}
        placeholder="Address 2"
        required
        />

        <input
        name="City"
        value={CityValue}
        onChange={((e) => SetCity(e.target.value))}
        onBlur={(e) => SetCity(e.target.value)}
        placeholder="City"
        required
        />

        <input
        name="State"
        value={StateValue}
        onChange={((e) => SetState(e.target.value))}
        onBlur={(e) => SetState(e.target.value)}
        placeholder="State"
        required
        />

        <input
        name="Country"
        value={CountryValue}
        onChange={((e) => SetCountry(e.target.value))}
        onBlur={(e) => SetCountry(e.target.value)}
        placeholder="Country"
        required
        />

        <input
        name="ZipCode"
        value={ZipCodeValue}
        onChange={((e) => SetZipCode(e.target.value))}
        onBlur={(e) => SetZipCode(e.target.value)}
        placeholder="Zip Code"
        required
        />

        <input
        name="Website"
        value={WebsiteValue}
        onChange={((e) => SetWebsite(e.target.value))}
        onBlur={(e) => SetWebsite(e.target.value)}
        placeholder="E-mail"
        required
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        {!IsValid && <p>Please enter a valid email address.</p>}
    </form>
    </div>
);
}

export default Contact;