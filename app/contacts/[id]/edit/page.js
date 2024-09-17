"use client";
import ContactForm from "@/app/components/ContactForm";
import Link from "next/link";
import { ContactAPI } from "@/app/data/contactAPI";
import { useParams } from "next/navigation";

/**
 * The edit page is a specific route that is based on the dynamic route of [id]
 * The edit page will display a ContactForm component that is already populated with the information of contact that matches the id of the route
 **/

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
