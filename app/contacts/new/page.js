"use client";
import Link from "next/link";
import ContactForm from "../ContactForm";

export default function NewContact() {
  return (
    <div className="content-container">
      <h1>Add Contact</h1>
      <ContactForm />
      <Link href="/">Return to Home Page</Link>
    </div>
  );
}
