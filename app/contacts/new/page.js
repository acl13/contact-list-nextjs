"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NewContact() {
  const router = useRouter();

  const handleSubmit = () => {
    // add contact to contacts list
    router.push("/contacts");
  };

  return (
    <div className="content-container">
      <h1>Add Contact</h1>
      <form className="form">
        <label>Name</label>
        <input type="text"></input>

        <br />

        <label>Email</label>
        <input type="text"></input>

        <br />

        <label>Phone</label>
        <input type="text"></input>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <Link href="/">Return to Home Page</Link>
    </div>
  );
}
