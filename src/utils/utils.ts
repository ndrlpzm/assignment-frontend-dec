import placeholder from "../assets/picture-placeholder.png";
export function handleImgError(
  event: React.SyntheticEvent<HTMLImageElement, Event>
): void {
  event.currentTarget.src = placeholder;
}
