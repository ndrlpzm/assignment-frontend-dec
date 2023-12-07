export class Item {
  constructor(
    public key: string,
    public index: number,
    public image: string,
    public title: string,
    public description?: string | undefined
  ) {}
}
export default Item;
