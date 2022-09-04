import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String
    $desc: String
    $status: String
    $image: String
    $languages: [String]
  ) {
    id
    name
    desc
    status
    image
    languages
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $id: ID
    $name: String
    $desc: String
    $status: String
    $image: String
    $languages: [String]
  ) {
    id
    name
    desc
    status
    image
    languages
  }
`;
export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: ID!) {
    id
    name
    desc
    status
    image
    languages
  }
`;
