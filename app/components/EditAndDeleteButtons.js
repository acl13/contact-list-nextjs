import { useState } from "react";
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
      <button className="margin-5 padding-2">
        <FaRegEdit size="1.5em" />
      </button>
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
