import { gql } from "apollo-boost";

// Foundation
const FND_GRAPH = gql`
{
  accounts(id: "0x0458b64541AD54DB9291E215E112edCF36a70550") {
    id
    isAdmin
    creator {
      id
    }
    nfts {
      id
    }
  }
}
`

// Zora
const ZORA_USER_GRAPH = gql`
{
  user(id: "0x0048d02963b97445a012ad6d44bd38a0239c5b88") {
    collection {
      id
    }
    creations {
      id
    }
  }
}
`;

const ZORA_MEDIA_GRAPH = gql`
query GetMedia($id: String) {
  media(id: $id) {
    contentURI
    owner {
      id
    }
  }
}
`;

// Example
const GET_TRANSFERS = gql`
  {
    transfers(first: 10) {
      id
      from
      to
      value
    }
  }
`;
// See more example queries on https://thegraph.com/explorer/subgraph/paulrberg/create-eth-app

export default GET_TRANSFERS;
export {
  FND_GRAPH,
  ZORA_USER_GRAPH,
  ZORA_MEDIA_GRAPH,
  GET_TRANSFERS
};
