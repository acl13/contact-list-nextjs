import Link from "next/link";
import Image from "next/image";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

export default function Contact({ contact, removeContact }) {
  return (
    <li>
      <ul className="contact-grid">
        <li>
          <Link href={`/contacts/${contact.id}`}>
            <Image
              className="circle"
              src={contact.image_url}
              alt="contact profile picture"
              width={50}
              height={50}
              unoptimized
              onError={(e) =>
                (e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/8847/8847419.png")
              }
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
        <li>{contact.email}</li>
        <li>{contact.phone_number}</li>
        <li>
          <EditAndDeleteButtons
            contact={contact}
            removeContact={removeContact}
          />
        </li>
      </ul>
    </li>
  );
}
