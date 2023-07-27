import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faBars } from "@fortawesome/free-solid-svg-icons";

// Define the type for the props (if any)
interface NavbarProps {
  // Define the props here, if needed
}

// Use React.FC type for the component function and specify the props type as a generic
const Navbar: React.FC<NavbarProps> = () => {
  // state isOpen
  const [isOpen, setIsOpen] = React.useState(false);

  // onClick -> toggle
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // conditional render the icon
  const icon = isOpen ? faX : faBars;

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-center w-16 h-16 bg-blue-500"
    >
      <FontAwesomeIcon icon={icon} className="w-6 h-6 text-white" />
    </div>
  );
};

export default Navbar;
