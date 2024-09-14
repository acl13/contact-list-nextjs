import Link from "next/link";
import Image from "next/image";

export default function Contact({ contact }) {
  return (
    <Link href={`/contacts/${contact.id}`}>
      <li>
        <ul className="contact-grid">
          <li>
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
          </li>
          <li>{contact.name}</li>
          <li>{contact.email}</li>
          <li>{contact.phone_number}</li>
          <li>Edit</li>
        </ul>
      </li>
    </Link>
  );
}
