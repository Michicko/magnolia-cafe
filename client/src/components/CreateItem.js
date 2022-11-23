import { Link } from "react-router-dom";

const CreateItem = ({ link, text }) => {
  return (
    <Link to={link} className="create-link">
      {text}
    </Link>
  );
};

export default CreateItem;
