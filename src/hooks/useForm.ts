import { FormContext, FormContextType } from "@/contexts/formContext";
import { useContext } from "react";

export function useForm<T, D>(): FormContextType<T, D> {
  return useContext(FormContext) as FormContextType<T, D>;
}
