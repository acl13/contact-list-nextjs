import ContactPage from "./contacts/page";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Welcome to Your Contact List</h1>
      <ContactPage />
    </main>
  );
}
