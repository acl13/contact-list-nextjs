import Link from "next/link";

export default function Contact({ contact }) {
  return (
    <Link href={`/contacts/${contact.id}`}>
      <li>
        <ul className="contact-grid">
          <li>img</li>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <li>{contact.phone_number}</li>
          <li>Edit</li>
        </ul>
      </li>
    </Link>
  );
}
