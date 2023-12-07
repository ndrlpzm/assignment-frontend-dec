import "./ItemDetail.css";
import { useNavigate } from "react-router-dom";
import { handleImgError } from "../utils/utils";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchAll } from "../redux/slices/itemListSlice";

export default function ItemDetail() {
  const item = useAppSelector((state) => state.activeItem.value);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    dispatch(fetchAll());
    navigate("/");
  }

  return (
    <div className="detail-wrapper">
      {item && (
        <>
          <h1>{item.title}</h1>
          <article className="detail-article">
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
