import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CONTACT } from "../utils/mutations";

import { QUERY_SINGLE_CONTACT } from "../utils/queries";

const SingleContact = () => {
  const { contactid } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_CONTACT, {
    variables: { contactid: contactid },
  });

  const contact = data?.contact || {};

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

  const [contactUpdated, setcontactUpdated] = useState("");

  const [updateContactInfo, { error }] = useMutation(UPDATE_CONTACT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // TODO:ADD MUTATION NAME AFTER AWAIT LINE 21
      const { data } = await updateContactInfo({
        variables: {
          newContactInfo: {
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
          contactId: contactid,
        },
      });

      setcontactUpdated("Group Updated");
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

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <>
        <form onSubmit={handleFormSubmit}>
        <div className="h2">
            <br />
              <h2 className="h2" htmlFor="Groups">Edit Contact</h2>

            <input
              name="Name"
              value={NameValue}
              onChange={(e) => SetName(e.target.value)}
              onBlur={(e) => SetName(e.target.value)}
              placeholder={contact.name}
              required
            />
            <input
              name="Nickname"
              value={NicknameValue}
              onChange={(e) => SetNickname(e.target.value)}
              onBlur={(e) => SetNickname(e.target.value)}
              placeholder={contact.nickname}
            />
            <input
              name="Email"
              value={EmailValue}
              onChange={(e) => SetEmail(e.target.value)}
              onBlur={(e) => SetEmail(e.target.value)}
              placeholder={contact.email}
              required
            />
            <input
              name="CompanyName"
              value={CompanyNameValue}
              onChange={(e) => SetCompanyName(e.target.value)}
              onBlur={(e) => SetCompanyName(e.target.value)}
              placeholder={contact.company}
            />
            <input
              name="Title"
              value={TitleValue}
              onChange={(e) => SetTitle(e.target.value)}
              onBlur={(e) => SetTitle(e.target.value)}
              placeholder={contact.title}
            />
            <input
              name="Department"
              value={DepartmentValue}
              onChange={(e) => SetDepartment(e.target.value)}
              onBlur={(e) => SetDepartment(e.target.value)}
              placeholder={contact.department}
            />
            <input
              name="BusinessPhone"
              value={BusinessPhoneValue}
              onChange={(e) => SetBusinessPhone(e.target.value)}
              onBlur={(e) => SetBusinessPhone(e.target.value)}
              placeholder={contact.businessphone}
            />
            <input
              name="MobilePhone"
              value={MobilePhoneValue}
              onChange={(e) => SetMobilePhone(e.target.value)}
              onBlur={(e) => SetMobilePhone(e.target.value)}
              placeholder={contact.mobilephone}
            />
            <input
              name="Address1"
              value={Address1Value}
              onChange={(e) => SetAddress1(e.target.value)}
              onBlur={(e) => SetAddress1(e.target.value)}
              placeholder={contact.address1}
            />
            <input
              name="Address2"
              value={Address2Value}
              onChange={(e) => SetAddress2(e.target.value)}
              onBlur={(e) => SetAddress2(e.target.value)}
              placeholder={contact.address2}
            />
            <input
              name="City"
              value={CityValue}
              onChange={(e) => SetCity(e.target.value)}
              onBlur={(e) => SetCity(e.target.value)}
              placeholder={contact.city}
            />
            <input
              name="State"
              value={StateValue}
              onChange={(e) => SetState(e.target.value)}
              onBlur={(e) => SetState(e.target.value)}
              placeholder={contact.state}
            />
            <input
              name="Country"
              value={CountryValue}
              onChange={(e) => SetCountry(e.target.value)}
              onBlur={(e) => SetCountry(e.target.value)}
              placeholder={contact.country}
            />
            <input
              name="ZipCode"
              value={ZipCodeValue}
              onChange={(e) => SetZipCode(e.target.value)}
              onBlur={(e) => SetZipCode(e.target.value)}
              placeholder={contact.zip}
            />
            <input
              name="Website"
              value={WebsiteValue}
              onChange={(e) => SetWebsite(e.target.value)}
              onBlur={(e) => SetWebsite(e.target.value)}
              placeholder={contact.website}
              />
              </div>
              <button className="btn btn-primary btn-block py-3" type="submit">
                Update Contact
              </button>
              <br />
        </form>
      </>
    </main>
  );
};

export default SingleContact;
