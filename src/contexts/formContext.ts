import { createContext, Dispatch } from "react";

export type FormContextType<T, D> = {
  formState: T;
  dispatch: Dispatch<D>;
  resetForm: () => void;
};

export const FormContext = createContext<FormContextType<unknown, unknown>>({
  formState: {},
  dispatch: () => {},
  resetForm: () => {},
});
