import { itemMetaList } from '../mockData/assetMock';

// NOTE: this is for the rinkeby testnet. NOT the mainnet
const ENDPOINT = 'https://api-staging.rarible.com/protocol/ethereum/nft/indexer/v0.1/items/search';

// Params
// userAddress: string; type: "creator" | "owner";
export const getTokensByAddress = async (userAddress = '', type) => {
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

export const getTokenMetaData = async (tokenId = '') => {
  return itemMetaList.filter((item) => item.id === tokenId);
}
