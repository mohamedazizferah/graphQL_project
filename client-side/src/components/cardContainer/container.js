import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../apollo-client/queries";
import Card from "../card/card";
import "./container.css";

function Container() {
  const { data } = useQuery(GET_PRODUCTS);

  return (
    <div className="container">
      {data?.getProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Container;
