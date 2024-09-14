"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
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
      <div className="content-container text-center">
        <h1>{contact.name}</h1>
        <Image
          src={contact.image_url}
          alt="contact profile picture"
          width={250}
          height={250}
          unoptimized
          onError={(e) =>
            (e.target.src =
              "https://cdn-icons-png.flaticon.com/512/8847/8847419.png")
          }
        />
        <p>{contact.email}</p>
        <p>{contact.phone_number}</p>
        <button className="margin-5 padding-2">
          <FaRegEdit size="1.5em" />
        </button>
        <button className="margin-5 padding-2">
          <FaRegTrashCan size="1.5em" />
        </button>
        <Link href="/contacts" className="block">
          Back
        </Link>
      </div>
    </main>
  );
}
