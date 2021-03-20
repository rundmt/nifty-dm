import { itemMetaList } from '../mockData/assetMock';
import { createdTokensResponse, ownedTokenResponse } from '../mockData/mock';

const DEVELOPMENT = process.env.NODE_ENV === 'development';

// NOTE: this is for the rinkeby testnet. NOT the mainnet
const ENDPOINT = 'https://api-staging.rarible.com/protocol/ethereum/nft/indexer/v0.1/items/search';

// Params
// userAddress: string; type: "creator" | "owner";
export const getTokensByAddress = async (userAddress = '', type) => {
  if (DEVELOPMENT) {
    return type === 'creator' ? createdTokensResponse.items : ownedTokenResponse.items;
  } else {
    const body = JSON.stringify({
      '@type': `by_${type}`,
      [type]: userAddress
    });

    try {
      const res = await fetch(ENDPOINT, {
        body,
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      return await res.json();
    } catch (err) {
      console.error('getTokensByAddress() error: ', err);
    }
  }
}

export const getTokenMetaData = async (tokenId = '', key = '') => {
  if (DEVELOPMENT) {
    if (key) {
      return itemMetaList.filter((item) => item.id === tokenId).map((item) => item[key]);
    } else {
      return itemMetaList.filter((item) => item.id === tokenId).map((item) => item);
    }
  }
}
