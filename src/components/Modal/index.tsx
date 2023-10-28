import { Container } from "@/styles/components/Modal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type ModalType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ showModal, setShowModal }: ModalType) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container css={{ display: `${showModal ? "block" : "none"}` }}>
      <div>
        <IoClose size={32} onClick={() => closeModal()} />
        <iframe src="https://app.i-mve.com/jobform/64fa1e9fbb229266c96a40b4" />
      </div>
    </Container>
  );
};

export default Modal;
