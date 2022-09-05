import { useState } from "react";
import { useMutation } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import { DELETE_PRODUCT } from "../../apollo-client/mutations";
import { GET_PRODUCTS } from "../../apollo-client/queries";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BasicModal from "../modal/modal";
import "./card.css";

function Card({ product }) {
  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    variables: { deleteProductId: product.id },
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  const handleClick = () => {
    deleteProduct({
      variables: { id: product.id },
    });
  };
  const handleclose = () => {
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-left">
        <div className="card-image">
          {product.image ? (
            <img src={product.image} alt="product" />
          ) : (
            <img
              src="https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
              alt="product"
            />
          )}
        </div>
      </div>
      <div className="card-center">
        <span className="card-title">{product.name}</span>
        <p className="card-content">{product.desc}</p>
        <div className="card-skills">
          {product.languages.map((language) => (
            <div className="card-skill">{language}</div>
          ))}
        </div>
      </div>
      <div className="card-right">
        <span className="card-status">
          <CheckCircleIcon sx={{ fontSize: "1vw" }} />
          {product.status}
        </span>
        <button className="delete-btn" onClick={handleClick}>
          <CloseIcon sx={{ fontSize: "1.5vw" }} />
        </button>
        <div className="card-buttons">
          <button className="card-button">view profile</button>
          <button className="card-button" onClick={() => setOpen(true)}>
            update profile
          </button>
          <BasicModal
            open={open}
            handleclose={handleclose}
            product={product}
            purpose="update"
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
