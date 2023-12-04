export class Item {
  index: number;
  image: string;
  title: string;
  description?: string;
  constructor(
    index: number,
    image: string,
    title: string,
    description?: string | undefined
  ) {
    this.index = index;
    this.image = image;
    this.title = title;
    this.description = description;
  }
}
export default Item;
