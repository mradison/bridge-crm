import { useState } from 'react';
import emailValidator from 'email-validator';

function Contact(prop) {
const [NameValue, SetName] = useState('');
const [Nickname, SetNickname] =useState('');
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
    <h2 className="contactForm">Contact</h2>
    <form className="contactForm" onSubmit={handleSubmit}>
        <input
        name="Name"
        value={NameValue}
        onChange={(e) => SetName(e.target.value)}
        onBlur={((e) => SetName(e.target.value))}
        placeholder="Enter Name"
        required
        />

        <input
        name="Nickname"
        value={NicknameValue}
        onChange={((e) => SetNickname(e.target.value))}
        onBlur={(e) => SetNickname(e.target.value)}
        placeholder="Enter Nickname"
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

        <input
        name="CompanyName"
        value={CompanyNameValue}
        onChange={((e) => SetCompanyName(e.target.value))}
        onBlur={(e) => SetCompanyName(e.target.value)}
        placeholder="Enter Company Name"
        required
        />

        <input
        name="Title"
        value={TitleValue}
        onChange={((e) => SetTitle(e.target.value))}
        onBlur={(e) => SetTitle(e.target.value)}
        placeholder="Enter Title"
        required
        />

        <input
        name="Department"
        value={DepartmentValue}
        onChange={((e) => SetDepartment(e.target.value))}
        onBlur={(e) => SetDepartment(e.target.value)}
        placeholder="Enter Department"
        required
        />

        <input
        name="BusinessPhone"
        value={BusinessPhoneValue}
        onChange={((e) => SetBusinessPhone(e.target.value))}
        onBlur={(e) => SetBusinessPhone(e.target.value)}
        placeholder="Enter Business Phone Number"
        required
        />

        <input
        name="MobilePhone"
        value={MobilePhoneValue}
        onChange={((e) => SetMobilePhone(e.target.value))}
        onBlur={(e) => SetMobilePhone(e.target.value)}
        placeholder="Enter Mobile Phone Number"
        required
        />

        <input
        name="Address1"
        value={Address1Value}
        onChange={((e) => SetAddress1(e.target.value))}
        onBlur={(e) => SetAddress1(e.target.value)}
        placeholder="Enter Address 1"
        required
        />

        <input
        name="Address2"
        value={Address2Value}
        onChange={((e) => SetAddress2(e.target.value))}
        onBlur={(e) => SetAddress2(e.target.value)}
        placeholder="Enter Address 2"
        required
        />

        <input
        name="City"
        value={CityValue}
        onChange={((e) => SetCity(e.target.value))}
        onBlur={(e) => SetCity(e.target.value)}
        placeholder="Enter City"
        required
        />

        <input
        name="State"
        value={StateValue}
        onChange={((e) => SetState(e.target.value))}
        onBlur={(e) => SetState(e.target.value)}
        placeholder="Enter State"
        required
        />

        <input
        name="Country"
        value={CountryValue}
        onChange={((e) => SetCountry(e.target.value))}
        onBlur={(e) => SetCountry(e.target.value)}
        placeholder="Enter Country"
        required
        />

        <input
        name="ZipCode"
        value={ZipCodeValue}
        onChange={((e) => SetZipCode(e.target.value))}
        onBlur={(e) => SetZipCode(e.target.value)}
        placeholder="Enter Zip Code"
        required
        />

        <input
        name="Website"
        value={WebsiteValue}
        onChange={((e) => SetWebsite(e.target.value))}
        onBlur={(e) => SetWebsite(e.target.value)}
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