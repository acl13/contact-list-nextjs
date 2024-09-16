import Link from "next/link";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

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
          <button className="margin-5 padding-2">
            <FaRegEdit size="1.5em" />
          </button>
          <button
            className="margin-5 padding-2"
            onClick={() => {
              removeContact(contact);
            }}
          >
            <FaRegTrashCan size="1.5em" />
          </button>
        </li>
      </ul>
    </li>
  );
}
