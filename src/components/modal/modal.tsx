import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.75)",
  },
};
const customStyles = (background: string) => {
  if (background) {
    return {
      ...styles,
      content: {
        ...styles.content,
        background,
        border: "none",
      },
    };
  }
  return styles;
};

type Props = {
  children:
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | boolean
    | null
    | undefined;
  isOpen: boolean;
  background: string;
  shouldCloseOnOverlayClick: boolean;
};

export const ModalCustom = ({
  children,
  isOpen = false,
  background = "",
  shouldCloseOnOverlayClick = true,
}: Props) => {
  const [modalIsOpen, setIsOpen] = useState(isOpen);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles(background)}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {children}
    </Modal>
  );
};
