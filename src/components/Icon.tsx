import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  className?: string;
}

// An Icon component made to render icons from the 'react-icons' library
const Icon = ({ icon: IconComponent, className }: IconProps) => {
  return <IconComponent className={className} />;
};

export default Icon;
