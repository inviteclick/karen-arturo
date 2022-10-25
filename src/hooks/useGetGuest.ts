import { ContextInstance } from "./../context/index";
import { useContext } from "react";

export const useGetGuest = () => {
  const {
    state: { selectedGuest },
  } = useContext(ContextInstance);

  return {
    id: selectedGuest?.id,
    invitado: selectedGuest?.invitado,
    adultos: selectedGuest?.adultos,
    niños: selectedGuest?.niños,
  };
};
