import React from "react";
import { createComponentBase } from "@/libs/component-base/index";
import { BaseComponentProps } from "@/types/common.types";

export interface SampleComponentProps extends BaseComponentProps {
  children?: React.ReactNode;
  modifierA?: string;
  modifierB?: boolean;
}

export const SampleComponent = ({
  children,
  modifierA,
  modifierB,
  className,
}: SampleComponentProps) => {
  const componentClassName = "a-sample-component";
  // const isString = modifierA && modifierA in typeof ;
  const modifiers = { [modifierA ?? ""]: !!modifierA, modifierB };
  const { Container } = createComponentBase(componentClassName, "div");
  return (
    <Container className={className} modifiers={modifiers}>
      {children}
    </Container>
  );
};
