export type BaseComponentProps = {
  id?: string;
  className?: string;
};

export type ModifiersDictionaryType = Record<
  string | number,
  boolean | string | null | undefined
>;

export type ContainerProps = {
  modifiers?: ModifiersDictionaryType;
} & BaseComponentProps;
