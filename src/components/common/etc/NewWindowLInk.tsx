import { Link } from "react-router-dom";

interface NewWindowLinkProps {
  to: string;
  children: React.ReactNode;
}

const NewWindowLink = ({ to, children }: NewWindowLinkProps) => {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};

export default NewWindowLink;
