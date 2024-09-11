"use client";
import Link from "next/link";
import Contact from "./contact";
import data from "../../public/data.json";

export default function ContactPage() {
  const contacts = data.contacts;

  return (
    <div className="content-container text-center">
      <h1>All Contacts</h1>
      <button>
        <Link href="/contacts/new">Add Contact</Link>
      </button>
      <form>
        <input
          type="text"
          placeholder="Search Contacts"
          className="full-width"
        ></input>
      </form>
      <ul className="contact-grid grid-headers">
        <li>Profile Pic</li>
        <li>Name</li>
        <li>Email</li>
        <li>Phone</li>
        <li></li>
      </ul>
      <ul>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
