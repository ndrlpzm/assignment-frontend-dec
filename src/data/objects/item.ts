export class Item {
  constructor(
    public index: number,
    public image: string,
    public title: string,
    public description?: string | undefined
  ) {}
}
export default Item;
