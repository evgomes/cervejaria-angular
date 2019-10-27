import BeerType from "./beer-type";

export default interface Beer {
  id: number;
  name: string;
  price: string;
  description: string;
  imageBase64: string;
  type: BeerType;
}
