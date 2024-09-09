"use client";
import Link from "next/link";
import { ContactAPI } from "@/app/data/contactAPI";
import { useParams } from "next/navigation";

export default function Contact() {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));

  if (!contact) {
    return <div>Sorry, that contact was not found</div>;
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
