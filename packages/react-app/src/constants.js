import {FND_GRAPH, ZORA_USER_GRAPH, GET_TRANSFERS} from "./graphql/subgraph";

const CURRENT_PROTOCOL = 'ZORA';

const PROTOCOLS = {
  FND: {
    SUBGRAPH: FND_GRAPH,
    URI: 'https://api.thegraph.com/subgraphs/name/f8n/fnd'
  },
  ZORA: {
    SUBGRAPH: ZORA_USER_GRAPH,
    URI: 'https://api.thegraph.com/subgraphs/name/ourzora/zora-v1'
  },
  CREATE_ETH_APP: {
    SUBGRAPH: GET_TRANSFERS,
    URI: 'https://api.thegraph.com/subgraphs/name/paulrberg/create-eth-app'
  }
};

export default PROTOCOLS;
export {CURRENT_PROTOCOL};