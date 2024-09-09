"use client";
import Link from "next/link";
import { ContactAPI } from "../data/contactAPI";

export default function ContactPage() {
  const contacts = ContactAPI.contacts;
  return (
    <div>
      <h1>All Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link href="/contacts/new">Add Contact</Link>
      </button>
    </div>
  );
}
