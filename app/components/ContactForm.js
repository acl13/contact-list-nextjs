import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactAPI } from "../data/contactAPI";

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone_number, setPhone_number] = useState(null);
  const [image_url, setImage_url] = useState(null);
  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = () => {
    // add contact to contacts list
    const id = generateId();
    ContactAPI.addContact({
      id,
      name,
      email,
      phone_number,
      image_url,
    });

    //TODO: save data (local storage?)
    router.push("/contacts");
  };

  return (
    <>
      <form className="form">
        <label>Name: </label>
        <input
          type="text"
          placeholder="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <label>Email</label>
        <input
          type="text"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label>Phone</label>
        <input
          type="text"
          placeholder="(1) 000-000-0000"
          required
          onChange={(e) => setPhone_number(e.target.value)}
        />

        <br />
        <label>Image URL</label>
        <input
          type="text"
          placeholder="https://www.example.com"
          required
          onChange={(e) => setImage_url(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
