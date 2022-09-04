import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_PRODUCTS } from "../../apollo-client/queries";
import Card from "../card/card";
import "./container.css";

function Container() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("data", data);
  return (
    <div className="container">
      {data.getProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Container;
