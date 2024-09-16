"use client";
import Link from "next/link";
import Contact from "./contact";
import { ContactAPI } from "../data/contactAPI";
import { useState } from "react";
import { SearchBar } from "../searchBar";

export default function ContactPage() {
  const [contacts, setContacts] = useState(ContactAPI.contacts);

  const contactSearch = (str) => {
    const searchedContacts = ContactAPI.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(str.toLowerCase())
    );
    setContacts(searchedContacts);
  };

  // TODO: Figure out why this function doesn't work, but contactSearch does?
  const removeContact = (contact) => {
    const contactToRemove = ContactAPI.get(contact.id);
    console.log(contactToRemove);
    ContactAPI.removeContact(contactToRemove);
    console.log(ContactAPI.contacts);
    const updatedContacts = ContactAPI.contacts;
    // Why does setContacts update the state here???
    setContacts(updatedContacts);
    console.log(contacts);
  };

  return (
    <div className="content-container text-center">
      <h1>All Contacts</h1>
      <button>
        <Link href="/contacts/new">Add Contact</Link>
      </button>
      <SearchBar onSearchTermChange={contactSearch} />
      <ul className="contact-grid grid-headers">
        <li>Profile Pic</li>
        <li>Name</li>
        <li>Email</li>
        <li>Phone</li>
        <li></li>
      </ul>
      <ul>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            removeContact={removeContact}
          />
        ))}
      </ul>
    </div>
  );
}
