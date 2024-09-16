import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function EditAndDeleteButtons({ contact, removeContact }) {
  return (
    <>
      <button className="margin-5 padding-2">
        <FaRegEdit size="1.5em" />
      </button>
      <button
        className="margin-5 padding-2"
        onClick={() => {
          removeContact(contact);
        }}
      >
        <FaRegTrashCan size="1.5em" />
      </button>
    </>
  );
}
