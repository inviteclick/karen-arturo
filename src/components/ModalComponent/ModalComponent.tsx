import ReactDOM from "react-dom";
import styles from "./ModalComponent.module.css";

const ModalRoot: HTMLDivElement = document.querySelector(
  "#modal"
) as HTMLDivElement;

export const ModalComponent = ({
  children,
  isOpen,
}: {
  children: any;
  isOpen: boolean;
}) => {
  return (
    <>
      {isOpen
        ? ReactDOM.createPortal(
            <section className={styles.container}>{children} </section>,
            ModalRoot
          )
        : null}
    </>
  );
};
