"use client";
import Link from "next/link";
import Image from "next/image";
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
        <p>Edit</p>
        <p>Delete</p>
        <Link href="/contacts">Back</Link>
      </div>
    </main>
  );
}
