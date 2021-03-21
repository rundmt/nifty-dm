// Rarible response mock

// actual rarible user: https://rarible.com/sloppypencil : 0xa93996eca13e1afa3a5dfb2403596a232ca30369
// example wallet that works: 0xfb571f9da71d1ac33e069571bf5c67fadcff18e4

// Rarible api docs https://api-staging.rarible.com/protocol/ethereum/nft/indexer/v0.1/swagger/webjars/swagger-ui/index.html?configUrl=/protocol/ethereum/nft/indexer/v0.1/swagger/v3/api-docs/swagger-config#/item-controller/getItemMetaById

// tokens
export const createdTokensResponse = {
  "total": 4,
  "continuation": "1589810645000_0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
  "items": [
    {
      "id":  '0xd07dc4262bcdbf85190c01c996b4c06a461d2430:122953:0xa93996eca13e1afa3a5dfb2403596a232ca30369',
      "token": "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      "tokenId": 8.975059459101017e+76,
      "unlockable": false,
      "creator": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
      "supply": 1,
      "owners": [
        "0xa93996eca13e1afa3a5dfb2403596a232ca30369"
      ],
      "royalties": []
    },
    {
      "id":  '0x60f80121c31a0d46b5279700f9df786054aa5ee5:111413:0xa93996eca13e1afa3a5dfb2403596a232ca30369',
      "token": "0x60f80121c31a0d46b5279700f9df786054aa5ee5",
      "tokenId": 19,
      "unlockable": false,
      "creator": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
      "supply": 1,
      "owners": [
        "0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c"
      ],
      "royalties": [
        {
          "recipient": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
          "value": 1000
        }
      ]
    },
    {
      "id":  '0xd07dc4262bcdbf85190c01c996b4c06a461d2430:118642:0xa93996eca13e1afa3a5dfb2403596a232ca30369',
      "token": "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      "tokenId": 18,
      "unlockable": false,
      "creator": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
      "supply": 1,
      "owners": [
        "0x6e82296982537dd2f1d6c83d58d2aca54c17390a"
      ],
      "royalties": [
        {
          "recipient": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
          "value": 1000
        }
      ]
    },
    {
      "id":  '0x60f80121c31a0d46b5279700f9df786054aa5ee5:111466:0xa93996eca13e1afa3a5dfb2403596a232ca30369',
      "token": "0x60f80121c31a0d46b5279700f9df786054aa5ee5",
      "tokenId": 1.1368445889348308e+77,
      "unlockable": false,
      "creator": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
      "supply": 1,
      "owners": [
        "0xa93996eca13e1afa3a5dfb2403596a232ca30369"
      ],
      "royalties": []
    },
  ]
}

export const ownedTokenResponse = {
  "total": 13,
  "continuation": "1589810645000_0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
  "items": [
    {
      "id":  '0xd07dc4262bcdbf85190c01c996b4c06a461d2430:216292:0xd0e205348e8058370db36f2df775819f2ae2cb80',
      "token": "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      "tokenId": 8.975059459101017e+76,
      "unlockable": false,
      "creator": "0xd0e205348e8058370db36f2df775819f2ae2cb80",
      "supply": 1,
      "owners": [
        "0xa93996eca13e1afa3a5dfb2403596a232ca30369"
      ],
      "royalties": []
    },
    {
      "id":  '0x60f80121c31a0d46b5279700f9df786054aa5ee5:157332:0xd0e205348e8058370db36f2df775819f2ae2cb80',
      "token": "0x60f80121c31a0d46b5279700f9df786054aa5ee5",
      "tokenId": 19,
      "unlockable": false,
      "creator": "0xd0e205348e8058370db36f2df775819f2ae2cb80",
      "supply": 1,
      "owners": [
        "0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c"
      ],
      "royalties": [
        {
          "recipient": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
          "value": 1000
        }
      ]
    },
    {
      "id":  '0xd07dc4262bcdbf85190c01c996b4c06a461d2430:211589:0xd0e205348e8058370db36f2df775819f2ae2cb80',
      "token": "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      "tokenId": 18,
      "unlockable": false,
      "creator": "0xd0e205348e8058370db36f2df775819f2ae2cb80",
      "supply": 1,
      "owners": [
        "0x6e82296982537dd2f1d6c83d58d2aca54c17390a"
      ],
      "royalties": [
        {
          "recipient": "0xa93996eca13e1afa3a5dfb2403596a232ca30369",
          "value": 1000
        }
      ]
    }
  ]
}