"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactAPI } from "../data/contactAPI";

export default function ContactForm({ contact }) {
  const router = useRouter();
  // set initial state of input values based on whether contact exists or not
  const initialName = contact ? contact.name : null;
  const initialEmail = contact ? contact.email : null;
  const initialPhone = contact ? contact.phone_number : null;
  const initialImgUrl = contact ? contact.image_url : null;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone_number, setPhone_number] = useState(initialPhone);
  const [image_url, setImage_url] = useState(initialImgUrl);
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = () => {
    // add contact to contacts list if contact does not exist yet
    if (!contact) {
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
