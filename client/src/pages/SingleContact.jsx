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
            <h2 className="h2" htmlFor="Groups">
              Edit Contact
            </h2>
            <table>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    name="Name"
                    value={NameValue}
                    onChange={(e) => SetName(e.target.value)}
                    onBlur={(e) => SetName(e.target.value)}
                    placeholder={contact.name}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Nickname:</td>
                <td>
                  <input
                    name="Nickname"
                    value={NicknameValue}
                    onChange={(e) => SetNickname(e.target.value)}
                    onBlur={(e) => SetNickname(e.target.value)}
                    placeholder={contact.nickname}
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    name="Email"
                    value={EmailValue}
                    onChange={(e) => SetEmail(e.target.value)}
                    onBlur={(e) => SetEmail(e.target.value)}
                    placeholder={contact.email}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>
                  <input
                    name="CompanyName"
                    value={CompanyNameValue}
                    onChange={(e) => SetCompanyName(e.target.value)}
                    onBlur={(e) => SetCompanyName(e.target.value)}
                    placeholder={contact.company}
                  />
                </td>
              </tr>
              <tr>
                <td>Title:</td>
                <td>
                  <input
                    name="Title"
                    value={TitleValue}
                    onChange={(e) => SetTitle(e.target.value)}
                    onBlur={(e) => SetTitle(e.target.value)}
                    placeholder={contact.title}
                  />
                </td>
              </tr>
              <tr>
                <td>Department:</td>
                <td>
                  <input
                    name="Department"
                    value={DepartmentValue}
                    onChange={(e) => SetDepartment(e.target.value)}
                    onBlur={(e) => SetDepartment(e.target.value)}
                    placeholder={contact.department}
                  />
                </td>
              </tr>
              <tr>
                <td>Business Phone:</td>
                <td>
                  <input
                    name="BusinessPhone"
                    value={BusinessPhoneValue}
                    onChange={(e) => SetBusinessPhone(e.target.value)}
                    onBlur={(e) => SetBusinessPhone(e.target.value)}
                    placeholder={contact.businessphone}
                  />
                </td>
              </tr>
              <tr>
                <td>Mobile Phone:</td>
                <td>
                  <input
                    name="MobilePhone"
                    value={MobilePhoneValue}
                    onChange={(e) => SetMobilePhone(e.target.value)}
                    onBlur={(e) => SetMobilePhone(e.target.value)}
                    placeholder={contact.mobilephone}
                  />
                </td>
              </tr>
              <tr>
                <td>Address 1:</td>
                <td>
                  <input
                    name="Address1"
                    value={Address1Value}
                    onChange={(e) => SetAddress1(e.target.value)}
                    onBlur={(e) => SetAddress1(e.target.value)}
                    placeholder={contact.address1}
                  />
                </td>
              </tr>
              <tr>
                <td>Address 2:</td>
                <td>
                  <input
                    name="Address2"
                    value={Address2Value}
                    onChange={(e) => SetAddress2(e.target.value)}
                    onBlur={(e) => SetAddress2(e.target.value)}
                    placeholder={contact.address2}
                  />
                </td>
              </tr>
              <tr>
                <td>City:</td>
                <td>
                  <input
                    name="City"
                    value={CityValue}
                    onChange={(e) => SetCity(e.target.value)}
                    onBlur={(e) => SetCity(e.target.value)}
                    placeholder={contact.city}
                  />
                </td>
              </tr>
              <tr>
                <td>State:</td>
                <td>
                  <input
                    name="State"
                    value={StateValue}
                    onChange={(e) => SetState(e.target.value)}
                    onBlur={(e) => SetState(e.target.value)}
                    placeholder={contact.state}
                  />
                </td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>
                  <input
                    name="Country"
                    value={CountryValue}
                    onChange={(e) => SetCountry(e.target.value)}
                    onBlur={(e) => SetCountry(e.target.value)}
                    placeholder={contact.country}
                  />
                </td>
              </tr>
              <tr>
                <td>Zip Code:</td>
                <td>
                  <input
                    name="ZipCode"
                    value={ZipCodeValue}
                    onChange={(e) => SetZipCode(e.target.value)}
                    onBlur={(e) => SetZipCode(e.target.value)}
                    placeholder={contact.zip}
                  />
                </td>
              </tr>
              <tr>
                <td>Website:</td>
                <td>
                  <input
                    name="Website"
                    value={WebsiteValue}
                    onChange={(e) => SetWebsite(e.target.value)}
                    onBlur={(e) => SetWebsite(e.target.value)}
                    placeholder={contact.website}
                  />
                </td>
              </tr>
            </table>
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
