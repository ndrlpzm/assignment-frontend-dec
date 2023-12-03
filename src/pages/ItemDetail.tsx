import { useNavigate } from "react-router-dom";

export default function ItemDetail() {
  const navigate = useNavigate();
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    navigate("/");
  }

  return (
    <article>
      <button onClick={handleClick}>Back</button>
    </article>
  );
}
