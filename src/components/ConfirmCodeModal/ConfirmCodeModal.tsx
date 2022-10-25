import { useConfirmCode } from "../../hooks/useConfirmCode";
import { ModalComponent } from "../ModalComponent";
import styles from "./ConfirmCodeModal.module.css";
export const ConfirmCodeModal = ({ isOpen }: { isOpen: boolean }) => {
  const { value, setValue, checkCode, selectedGuest, error } = useConfirmCode();
  return (
    <ModalComponent isOpen={selectedGuest !== null ? false : true}>
      <div className={styles.main}>
        <h1>Ingresa tu codigo</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            checkCode();
          }}
        >
          Confirmar
        </button>
        <span> {error ? "Codigo no valido" : null}</span>
      </div>
    </ModalComponent>
  );
};
