import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectActiveItem } from "../redux/slices/activeItemSlice";
import { handleImgError } from "../utils/utils";

export default function ItemDetail() {
  const item = useSelector(selectActiveItem);
  const navigate = useNavigate();

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    navigate("/");
  }

  return (
    <div className="detail-wrapper">
      {item && (
        <>
          <h1>{item.title}</h1>
          <article>
            <img
              alt={item.description}
              src={item.image}
              onError={handleImgError}
            ></img>
            <div>{item.description}</div>
          </article>
        </>
      )}

      <button onClick={handleClick} className="button-back">
        Go Home
      </button>
    </div>
  );
}
