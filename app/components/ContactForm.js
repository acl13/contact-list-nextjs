"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactAPI } from "../data/contactAPI";

// This form is used in two scenarios: one for creating a new contact and adding it to the ContactAPI, and one for editing an existing contact

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

  const handleSubmit = () => {
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
  };

  return (
    <>
      <form className="form">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label>Email</label>
        <input
          type="text"
          value={email}
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label>Phone</label>
        <input
          type="text"
          value={phone_number}
          placeholder="(1) 000-000-0000"
          required
          onChange={(e) => setPhone_number(e.target.value)}
        />

        <br />
        <label>Image URL</label>
        <input
          type="text"
          value={image_url}
          placeholder="https://www.example.com"
          required
          onChange={(e) => setImage_url(e.target.value)}
        />
        <button
          type="button"
          className="vertical-margin-10 padding-2"
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
