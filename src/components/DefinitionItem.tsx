import { ReactNode } from "react";

interface DefinitionItemProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinitionItemProps) => {
  return (
    <div className="px-2 my-1">
      <dt className="text-muted-foreground mb-1">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
