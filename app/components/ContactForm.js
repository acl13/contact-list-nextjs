"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactAPI } from "../data/contactAPI";

/**
 * This form is used in two scenarios: one for creating a new contact and adding it to the ContactAPI, and one for editing an existing contact

So as not to copy/paste the same form in two places, this form has checks to see if the contact already exists in the ContactAPI object, and behaves differently based on whether or not that is true

The form will be empty (all inputs set to null) if the contact does not exist, or populated with the existing contact information if the contact does exist
 * 
 * @component
 * @param {Object} props - the component accepts contact and removeContact as props
 * @param {Object} props.contact - an object that contains the contact's id, name, email, and phone number
 * @returns {JSX.Element} the rendered form, either empty or populated with existing contact information
 * 
**/

export default function ContactForm({
  contact = { id: 0, name: "", email: "", phone_number: "", image_url: "" },
}) {
  const router = useRouter();
  // set initial state of input values based on whether contact exists in ContactAPI
  const initialName = ContactAPI.contacts.includes(contact)
    ? contact.name
    : null;
  const initialEmail = ContactAPI.contacts.includes(contact)
    ? contact.email
    : null;
  const initialPhone = ContactAPI.contacts.includes(contact)
    ? contact.phone_number
    : null;
  const initialImgUrl = ContactAPI.contacts.includes(contact)
    ? contact.image_url
    : null;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone_number, setPhone_number] = useState(initialPhone);
  const [image_url, setImage_url] = useState(initialImgUrl);
  const generateId = () => Math.round(Math.random() * 100000000);

  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      //Form validation is successful

      // add contact to contacts list if contact does not exist yet
      if (!ContactAPI.contacts.includes(contact)) {
        const id = generateId();
        ContactAPI.addContact({
          id,
          name,
          email,
          phone_number,
          image_url,
        });
        //TODO: save data (local storage?)
        router.push("/contacts");
        return;
      }
      // Else edit existing contact info
      const id = contact.id;
      ContactAPI.editContact({
        id,
        name,
        email,
        phone_number,
        image_url,
      });
      router.push("/contacts");
    } else {
      // Form validation is not succesful.
      alert(
        "There was an issue submitting this form. Please update any required fields and try again."
      );
    }
  };

  const validateForm = () => {
    // will check that each input is not empty, and test against a regex for email and phone_number inputs
    // the errors object is used to contain error messages that will be displayed to the user

    const errors = {};

    if (name === null || !name.trim()) {
      errors.name = "Name is required";
    }

    if (email === null || !email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (phone_number === null || !phone_number.trim()) {
      errors.phone_number = "Phone number is required";
    } else if (
      !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone_number)
    ) {
      errors.phone_number = "Phone number is invalid";
    }

    if (image_url === null || !image_url.trim()) {
      errors.image_url = "Image URL is required";
    }

    return errors;
  };

  return (
    <>
      <form className="form">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <br />

        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <br />

        <label>Phone</label>
        <input
          type="text"
          value={phone_number}
          placeholder="1 000-000-0000"
          onChange={(e) => setPhone_number(e.target.value)}
        />
        {errors.phone_number && (
          <span className="error-message">{errors.phone_number}</span>
        )}

        <br />
        <label>Image URL</label>
        <input
          type="text"
          value={image_url}
          placeholder="https://www.example.com"
          onChange={(e) => setImage_url(e.target.value)}
        />
        {errors.image_url && (
          <span className="error-message">{errors.image_url}</span>
        )}

        <button
          type="button"
          className="vertical-margin-10 padding-2 block"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  //contact is an object with properties id, name, email, phone_number, and imgage_url
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    image_url: PropTypes.string,
  }),
};
