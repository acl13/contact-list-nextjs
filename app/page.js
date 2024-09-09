import ContactPage from "./contacts/page";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Your Contact List</h1>
      <ContactPage />
      <Link href="/contacts">Click here to view your contacts</Link>
    </main>
  );
}
