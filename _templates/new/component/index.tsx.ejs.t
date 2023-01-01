---
to: src/components/<%= atomic %>/<%= lowerName %>/<%= lowerName %>.tsx
---

import React from 'react';
import { createComponentBase } from '@/libs/component-base/index';
import { BaseComponentProps } from "@/types/common.types";

export interface <%= pascalName %>Props extends BaseComponentProps {
  children?: React.ReactNode;
  modifierA?: boolean;
  modifierB?: boolean;
}

export const <%= pascalName %> = ({ 
  children,
  modifierA,
  modifierB,
  className
  }: <%= pascalName %>Props) => {
  const componentClassName = '<%= basicClassName %>';
  const modifiers = { modifierA, modifierB };
  const { Container } = createComponentBase(componentClassName, 'div');
  return (
    <Container className={className} modifiers={modifiers}>
      {children}
    </Container>
  );
};
