import { SetStateAction } from "react";

export type TGuest =
  | {
      id: string;
      invitado: string;
      adultos: number;
      niños: null;
    }
  | {
      id: string;
      invitado: string;
      adultos: number;
      niños: number;
    };

export type TState = {
  selectedGuest: TGuest | null;
  error: boolean;
};

export type TContext = {
  state: TState;
  setState: SetStateAction<any>;
};
