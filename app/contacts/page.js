import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      <h1>All Contacts</h1>
      <button>
        <Link href="/contacts/new">Add Contact</Link>
      </button>
    </div>
  );
}
