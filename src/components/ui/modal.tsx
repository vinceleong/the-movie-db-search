import { FC, PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        zIndex: 2,
        position: "fixed",
        top: 0,
        left: 0,
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "black",
          maxWidth: "500px",
          padding: "1rem",
          borderRadius: "1rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
