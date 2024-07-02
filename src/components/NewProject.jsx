import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd }) {
  const modal = useRef()
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enterTitle = title.current.value;
    const enterDescription = title.current.value;
    const enterDueDate = title.current.value;

    if (
      enterTitle.trim() === "" ||
      enterDescription.trim() === "" ||
      enterDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enterTitle,
      description: enterDescription,
      dueDate: enterDueDate,
    });
  }

  return (
    <>
    <Modal ref={modal} btnCaption='okay'>
      <h2 className='text-xl font-bold text-stone-900 my-4'>Invalid Input </h2>
      <p className='text-stone-600 mb-4'>Opss ... Sembra che tu abbia dimenticato un valore </p>
      <p className='text-stone-600 mb-4'>Inserisci il valore corretto</p>
    </Modal>
      <div className="w-[35rem] mt-6">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className=" text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
