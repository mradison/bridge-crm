import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_CONTACT } from "../../utils/mutations";
import { QUERY_CONTACTS } from "../../utils/queries";

import Auth from "../../utils/auth";

const ContactForm = () => {
  const [NameValue, SetName] = useState("");
  const [NicknameValue, SetNickname] = useState("");
  const [EmailValue, SetEmail] = useState("");
  const [CompanyNameValue, SetCompanyName] = useState("");
  const [TitleValue, SetTitle] = useState("");
  const [DepartmentValue, SetDepartment] = useState("");
  const [BusinessPhoneValue, SetBusinessPhone] = useState("");
  const [MobilePhoneValue, SetMobilePhone] = useState("");
  const [Address1Value, SetAddress1] = useState("");
  const [Address2Value, SetAddress2] = useState("");
  const [CityValue, SetCity] = useState("");
  const [StateValue, SetState] = useState("");
  const [CountryValue, SetCountry] = useState("");
  const [ZipCodeValue, SetZipCode] = useState("");
  const [WebsiteValue, SetWebsite] = useState("");

  const [addContact, { error }] = useMutation(ADD_CONTACT, {
    refetchQueries: [QUERY_CONTACTS, "contacts"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
      const { data } = await addContact({
        variables: {
          newContact: {
            name: NameValue,
            nickname: NicknameValue,
            email: EmailValue,
            company: CompanyNameValue,
            title: TitleValue,
            department: DepartmentValue,
            businessphone: BusinessPhoneValue,
            mobilephone: MobilePhoneValue,
            address1: Address1Value,
            address2: Address2Value,
            city: CityValue,
            state: StateValue,
            country: CountryValue,
            zip: ZipCodeValue,
            website: WebsiteValue,
          },
        },
      });

      SetName("");
      SetNickname("");
      SetEmail("");
      SetCompanyName("");
      SetTitle("");
      SetDepartment("");
      SetBusinessPhone("");
      SetMobilePhone("");
      SetAddress1("");
      SetAddress2("");
      SetCity("");
      SetState("");
      SetCountry("");
      SetZipCode("");
      SetWebsite("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3 className="activitiesTitle display-inline-block text-underline">
        Fill out Contact form below
      </h3>
      <div className="cardContainer">
        {Auth.loggedIn() ? (
          <div className="contactCard" style={{ textAlign: "center" }}>
            <form onSubmit={handleFormSubmit}>
              <div className="h2">
                <h2 className="h2" htmlFor="Contact">
                  Contact
                </h2>
                <input
                  name="Name"
                  value={NameValue}
                  onChange={(e) => SetName(e.target.value)}
                  onBlur={(e) => SetName(e.target.value)}
                  placeholder="Name"
                  required
                />
                <input
                  name="Nickname"
                  value={NicknameValue}
                  onChange={(e) => SetNickname(e.target.value)}
                  onBlur={(e) => SetNickname(e.target.value)}
                  placeholder="Nickname"
                />
                <input
                  name="Email"
                  value={EmailValue}
                  onChange={(e) => SetEmail(e.target.value)}
                  onBlur={(e) => SetEmail(e.target.value)}
                  placeholder="E-mail"
                  required
                />
                <input
                  name="CompanyName"
                  value={CompanyNameValue}
                  onChange={(e) => SetCompanyName(e.target.value)}
                  onBlur={(e) => SetCompanyName(e.target.value)}
                  placeholder="Company Name"
                />
                <input
                  name="Title"
                  value={TitleValue}
                  onChange={(e) => SetTitle(e.target.value)}
                  onBlur={(e) => SetTitle(e.target.value)}
                  placeholder="Title"
                />
                <input
                  name="Department"
                  value={DepartmentValue}
                  onChange={(e) => SetDepartment(e.target.value)}
                  onBlur={(e) => SetDepartment(e.target.value)}
                  placeholder="Department"
                />
                <input
                  name="BusinessPhone"
                  value={BusinessPhoneValue}
                  onChange={(e) => SetBusinessPhone(e.target.value)}
                  onBlur={(e) => SetBusinessPhone(e.target.value)}
                  placeholder="Business Phone #"
                />
                <input
                  name="MobilePhone"
                  value={MobilePhoneValue}
                  onChange={(e) => SetMobilePhone(e.target.value)}
                  onBlur={(e) => SetMobilePhone(e.target.value)}
                  placeholder="Mobile Phone #"
                />
                <input
                  name="Address1"
                  value={Address1Value}
                  onChange={(e) => SetAddress1(e.target.value)}
                  onBlur={(e) => SetAddress1(e.target.value)}
                  placeholder="Address 1"
                />
                <input
                  name="Address2"
                  value={Address2Value}
                  onChange={(e) => SetAddress2(e.target.value)}
                  onBlur={(e) => SetAddress2(e.target.value)}
                  placeholder="Address 2"
                />
                <input
                  name="City"
                  value={CityValue}
                  onChange={(e) => SetCity(e.target.value)}
                  onBlur={(e) => SetCity(e.target.value)}
                  placeholder="City"
                />
                <input
                  name="State"
                  value={StateValue}
                  onChange={(e) => SetState(e.target.value)}
                  onBlur={(e) => SetState(e.target.value)}
                  placeholder="State"
                />
                <input
                  name="Country"
                  value={CountryValue}
                  onChange={(e) => SetCountry(e.target.value)}
                  onBlur={(e) => SetCountry(e.target.value)}
                  placeholder="Country"
                />
                <input
                  name="ZipCode"
                  value={ZipCodeValue}
                  onChange={(e) => SetZipCode(e.target.value)}
                  onBlur={(e) => SetZipCode(e.target.value)}
                  placeholder="Zip Code"
                />
                <input
                  name="Website"
                  value={WebsiteValue}
                  onChange={(e) => SetWebsite(e.target.value)}
                  onBlur={(e) => SetWebsite(e.target.value)}
                  placeholder="Website"
                />
              </div>
              <button type="submit">Submit</button>
              <br />
            </form>
          </div>
        ) : (
          <p>
            You need to be logged in to share your thoughts. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};
export default ContactForm;
