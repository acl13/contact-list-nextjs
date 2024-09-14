"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactAPI } from "@/app/data/contactAPI";

export default function Contact() {
  const { id } = useParams();
  const contact = ContactAPI.contacts.find((contact) => contact.id == id);

  if (!contact) {
    return (
      <div>
        <p>Sorry, that contact was not found</p>
        <Link href="/contacts">Back</Link>
      </div>
    );
  }

  return (
    <main>
      <div>
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>
      </div>
      <Link href="/contacts">Back</Link>
    </main>
  );
}
