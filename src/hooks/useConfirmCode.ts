import { ContextInstance } from "./../context/index";
import { useState, useContext } from "react";
import { guestsList } from "../utils/guestList";
export const useConfirmCode = () => {
  const [value, setValue] = useState("");
  const { state, setState } = useContext(ContextInstance);

  const checkCode = () => {
    const guest = guestsList.filter((guest) => guest.id === value)[0];

    if (guest) {
      setState({
        ...state,
        selectedGuest: guest,
        error: false,
      });
    } else {
      setState({ ...state, error: true });
    }
  };

  return {
    value,
    setValue,
    checkCode,
    selectedGuest: state.selectedGuest,
    error: state.error,
  };
};
