"use client";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

/**
 * The new page is it's own route (url), and will display an empty ContactForm component
 **/

export default function NewContact() {
  return (
    <div className="content-container">
      <h1>Add Contact</h1>
      <ContactForm />
      <Link href="/">Return to Home Page</Link>
    </div>
  );
}
