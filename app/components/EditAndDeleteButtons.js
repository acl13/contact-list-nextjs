"use client";
import PropTypes from "prop-types";
import { useState } from "react";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function EditAndDeleteButtons({ contact, removeContact }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Link href={`/contacts/${contact.id}/edit`}>
        <button className="margin-5 padding-2">
          <FaRegEdit size="1.5em" />
        </button>
      </Link>
      <button className="margin-5 padding-2" onClick={openModal}>
        <FaRegTrashCan size="1.5em" />
      </button>
      <dialog className="content-container text-center" open={modalOpen}>
        <p>Are you sure you want to delete this contact?</p>
        <button className="margin-5 padding-2" onClick={closeModal}>
          Cancel
        </button>
        <button
          className="margin-5 padding-2"
          onClick={() => {
            removeContact(contact);
          }}
        >
          Confirm delete
        </button>
      </dialog>
    </>
  );
}

EditAndDeleteButtons.propTypes = {
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
