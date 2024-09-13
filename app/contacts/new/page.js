"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}

export default function NewContact() {
  const router = useRouter();
  const name = useFormInput("");
  const email = useFormInput("");
  const phone = useFormInput("");
  const imgUrl = useFormInput("");

  const handleSubmit = () => {
    // add contact to contacts list
    router.push("/contacts");
  };

  return (
    <div className="content-container">
      <h1>Add Contact</h1>
      <form className="form">
        <label>Name: </label>
        <input type="text" placeholder="name" required {...name}></input>

        <br />

        <label>Email</label>
        <input
          type="text"
          placeholder="name@example.com"
          required
          {...email}
        ></input>

        <br />

        <label>Phone</label>
        <input
          type="text"
          placeholder="(1)000-000-0000"
          required
          {...phone}
        ></input>

        <br />
        <label>Image URL</label>
        <input
          type="text"
          placeholder="https://www.example.com"
          required
          {...imgUrl}
        ></input>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <Link href="/">Return to Home Page</Link>
    </div>
  );
}
