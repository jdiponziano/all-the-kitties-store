export type CategoryDataProps = {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
};

export type ProductDataProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const categoryData: CategoryDataProps[] = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    linkUrl: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
    linkUrl: "shop/mens",
  },
];
