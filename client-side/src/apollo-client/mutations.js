import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation Mutation(
    $name: String
    $desc: String
    $status: String
    $image: String
    $languages: [String]
  ) {
    addProduct(
      name: $name
      desc: $desc
      status: $status
      image: $image
      languages: $languages
    ) {
      id
      name
      desc
      status
      image
      languages
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $updateProductId: ID
    $name: String
    $desc: String
    $status: String
    $image: String
    $languages: [String]
  ) {
    updateProduct(
      id: $updateProductId
      name: $name
      desc: $desc
      status: $status
      image: $image
      languages: $languages
    ) {
      id
      name
      desc
      status
      image
      languages
    }
  }
`;
export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId) {
      id
    }
  }
`;
