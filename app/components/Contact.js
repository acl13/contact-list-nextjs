import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import EditAndDeleteButtons from "./EditAndDeleteButtons";

/**
 * The Contact component displays a list of the contact's information
 *
 * @component
 * @param {Object} props - the component accepts contact and removeContact as props
 * @param {Object} props.contact - an object that contains the contact's id, name, email, and phone number
 * @param {function} props.removeContact - removes contact from ContactAPI
 * @returns {JSX.Element} the rendered list of contact information, styled as a grid
 **/
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
          <EditAndDeleteButtons
            contact={contact}
            removeContact={removeContact}
          />
        </li>
      </ul>
    </li>
  );
}

Contact.propTypes = {
  //contact is an object with properties id, name, email, phone_number, and imgage_url
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string,
    image_url: PropTypes.string,
  }),

  // removeContact is a function that takes an argument of a contact object
  removeContact: PropTypes.func,
};
