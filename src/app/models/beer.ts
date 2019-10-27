import BeerType from "./beer-type";

export default interface Beer {
  id: number;
  name: string;
  type: BeerType;
  price: number;
  description: string;
}
