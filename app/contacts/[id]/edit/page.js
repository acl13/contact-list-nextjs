"use client";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import { ContactAPI } from "@/app/data/contactAPI";
import { useParams } from "next/navigation";

export default function EditContact() {
  const { id } = useParams();
  const contact = ContactAPI.contacts.find((contact) => contact.id == id);
  return (
    <>
      <h1>Edit Contact</h1>
      <ContactForm contact={contact} />
      <Link href="/contacts" className="block">
        Back
      </Link>
    </>
  );
}
