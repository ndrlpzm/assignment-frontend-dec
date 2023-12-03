class Item {
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
export const itemListMock: Item[] = [
  {
    index: 1,
    title: "Item 1",
    description: "Description 1",
    image: "https://picsum.photos/id/4/200/300",
  },
  {
    index: 2,
    title: "Item 2",
    description: "Description 2",
    image: "http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg",
  },
  {
    index: 3,
    title: "Item 3",
    description: "Description 3",
    image: "https://www.google.com",
  },
  {
    index: 4,
    title: "Item 4",
    description: "Description 4",
    image: "https://picsum.photos/id/230/300/300",
  },
  {
    index: 5,
    title: "Item 5",
    description: "Description 5",
    image: "https://picsum.photos/id/6/200/200",
  },
  {
    index: 6,
    title: "Item 6",
    description: "Extra info",
    image: "https://picsum.photos/id/7/400/300",
  },
  {
    index: 7,
    title: "Item 7",
    description: "Description 7",
    image:
      "http://www.rubberdragon.com/website-design/44/content/just-in-time-stock.png?1290605562",
  },
  {
    index: 8,
    title: "Item 8",
    description: "Not available",
    image:
      "http://www.gwp.co.uk/wp-content/uploads/2012/10/jit-case-delivery1.jpg",
  },
  {
    index: 9,
    title: "Item 9",
    description: "Description 9",
    image:
      "http://fc00.deviantart.net/fs70/i/2011/217/a/0/field_panorama_stock_5_by_f3rd4-d45kgfp.jpg",
  },
  {
    index: 10,
    title: "Item 10",
    description: "Description 10",
    image: "https://www.google.nl",
  },
  {
    index: 11,
    title: "Item 11",
    description: "Description 11",
    image: "empty",
  },
  {
    index: 12,
    title: "Item 12",
    description: "Description 12",
    image: "https://picsum.photos/id/16/200/200",
  },
  {
    index: 13,
    title: "Item 13",
    description: "Description 13",
    image: "https://picsum.photos/id/20/300/400",
  },
  {
    index: 14,
    title: "Item 14",
    description: "Description 14",
    image: "https://picsum.photos/id/29/300/300",
  },
  {
    index: 15,
    title: "Item 15",
    description: "Description 15",
    image: "",
  },
  {
    index: 16,
    title: "Item 16",
    description: "Description 16",
    image: "http://farm4.staticflickr.com/3789/10437199943_8f6476cef1.jpg",
  },
  {
    index: 17,
    title: "Item 17",
    description: "Description 17",
    image: "",
  },
  {
    index: 18,
    title: "Item 18",
    description: "Description 18",
    image: "http://comps.canstockphoto.com/can-stock-photo_csp9177473.jpg",
  },
  {
    index: 19,
    title: "Item 19",
    description: "Description 19",
    image: "https://picsum.photos/id/237/200/300",
  },
  {
    index: 20,
    title: "Item 20",
    description: "Description 20",
    image: "http://www.officialpsds.com/images/stocks/ALLEY-stock1502.jpg",
  },
  {
    index: 21,
    title: "Item 21",
    description: "Description 21",
    image: "https://picsum.photos/id/9/200/300",
  },
  {
    index: 22,
    title: "Item 22",
    description: "Description 22",
    image: "",
  },
  {
    index: 23,
    title: "Item 23",
    description: "Description 23",
    image: "http://comps.canstockphoto.com/can-stock-photo_csp3928973.jpg",
  },
  {
    index: 24,
    title: "Item 24",
    description: "Description 24",
    image: "",
  },
  {
    index: 25,
    title: "Item 25",
    description: "Description 25",
    image: "https://picsum.photos/id/3/200/300",
  },
  {
    index: 26,
    title: "Item 26",
    description: "Description 26",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    index: 27,
    title: "Item 27",
    description: "Description 27",
    image: "https://picsum.photos/id/10/200/300.jpg",
  },
  {
    index: 28,
    title: "Item 28",
    description: "Description 28",
    image: "https://picsum.photos/id/8/200/300?grayscale",
  },
  {
    index: 29,
    title: "Item 29",
    description: "Description 29",
    image: "https://picsum.photos/id/1/200/300",
  },
  {
    index: 30,
    title: "Item 30",
    description: "Description 30",
    image: "https://picsum.photos/id/2/200/300",
  },
];
export default Item;
