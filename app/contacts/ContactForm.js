import { useState } from "react";
import { useRouter } from "next/navigation";
import data from "../../public/data.json";

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

export default function ContactForm() {
  const router = useRouter();
  const name = useFormInput("");
  const email = useFormInput("");
  const phone = useFormInput("");
  const imgUrl = useFormInput("");

  const handleSubmit = () => {
    // add contact to contacts list
    const generateId = () => Math.round(Math.random() * 100000000);
    const formData = {
      id: generateId(),
      name: name.value,
      email: email.value,
      phone_number: phone.value,
      image_url: imgUrl.value,
    };

    data.contacts.push(formData);

    console.log(formData);
    console.log(data.contacts);
    // router.push("/contacts");
  };

  return (
    <>
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
          placeholder="(1) 000-000-0000"
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
    </>
  );
}
