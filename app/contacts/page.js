"use client";
import Link from "next/link";
import Contact from "../components/Contact";
import { ContactAPI } from "../data/contactAPI";
import { useState } from "react";
import { SearchBar } from "../components/SearchBar";

export default function ContactPage() {
  const [contacts, setContacts] = useState(ContactAPI.contacts);

  const contactSearch = (str) => {
    const searchedContacts = ContactAPI.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(str.toLowerCase())
    );
    setContacts(searchedContacts);
  };

  const removeContact = (contact) => {
    const trimmedContacts = ContactAPI.remove(contact);
    setContacts(trimmedContacts);
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
