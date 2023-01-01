import React from "react";
import { mapModifiers, addClassName } from "@/libs/component";
import { ContainerProps } from "@/types/common.types";

export type ContainerHTMLProps<T extends keyof React.ReactHTML> =
  ContainerProps & JSX.IntrinsicElements[T];

export const createComponentBase = <T extends keyof React.ReactHTML>(
  baseClassName: string,
  tagName?: string
) => {
  const Container = React.forwardRef(function Container(
    props: ContainerHTMLProps<T>,
    ref
  ) {
    const {
      children,
      className: additionalClassName,
      modifiers,
      ...otherProps
    } = props;
    const modifierArray = modifiers ? Object.keys(modifiers) : [];
    const className = additionalClassName
      ? addClassName(
          mapModifiers(baseClassName, ...modifierArray),
          additionalClassName
        )
      : mapModifiers(baseClassName, ...modifierArray);
    return React.createElement(
      tagName ?? "div",
      {
        className,
        ...otherProps,
      },
      children
    );
  });
  return { Container };
};
