// Rarible response mock

// actual rarible user: https://rarible.com/sloppypencil : 0xa93996eca13e1afa3a5dfb2403596a232ca30369
// example wallet that works: 0xfb571f9da71d1ac33e069571bf5c67fadcff18e4

// Rarible api docs https://api-staging.rarible.com/protocol/ethereum/nft/indexer/v0.1/swagger/webjars/swagger-ui/index.html?configUrl=/protocol/ethereum/nft/indexer/v0.1/swagger/v3/api-docs/swagger-config#/item-controller/getItemMetaById

// tokens
export const createdTokensResponse = {
  "total": 16,
  "continuation": "1589810645000_0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
  "items": [
    {
      "id": "0x25646b08d9796ceda5fb8ce0105a51820740c049:0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c00000000000000000000000a",
      "token": "0x25646b08d9796ceda5fb8ce0105a51820740c049",
      "tokenId": 8.975059459101017e+76,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000013",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 19,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000012",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 18,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0x6e82296982537dd2f1d6c83d58d2aca54c17390a"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x25646b08d9796ceda5fb8ce0105a51820740c049:0xfb571f9da71d1ac33e069571bf5c67fadcff18e4000000000000000000000001",
      "token": "0x25646b08d9796ceda5fb8ce0105a51820740c049",
      "tokenId": 1.1368445889348308e+77,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c"
      ],
      "royalties": []
    },
    {
      "id": "0x0de3015b646c40a0b72603a08558f74ab35084ba:0xfb571f9da71d1ac33e069571bf5c67fadcff18e4000000000000000000000001",
      "token": "0x0de3015b646c40a0b72603a08558f74ab35084ba",
      "tokenId": 1.1368445889348308e+77,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 8,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000011",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 17,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000010",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 16,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x000000000000000000000000000000000000000000000000000000000000000f",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 15,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0xd703958825feab56f9c7dd3906149c20416497e4:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xd703958825feab56f9c7dd3906149c20416497e4",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xd504e84b42947ee6f07dbe28763896ea3a2bc5e9:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xd504e84b42947ee6f07dbe28763896ea3a2bc5e9",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x0fe65b68eb627c21eaf3cfe8183c4f946f3d48bd:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0x0fe65b68eb627c21eaf3cfe8183c4f946f3d48bd",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xc5bbd75789bd007784a0046094d19acea1a79eb1:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xc5bbd75789bd007784a0046094d19acea1a79eb1",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xa2eebb837aef89369ad117568d75348e6174520e:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xa2eebb837aef89369ad117568d75348e6174520e",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xb8863180cac2d0ab665e5968c0de25298a1d8cee:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xb8863180cac2d0ab665e5968c0de25298a1d8cee",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xa094e566b61b3c2d88acf7cc15e3dd0fa83f32af:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xa094e566b61b3c2d88acf7cc15e3dd0fa83f32af",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 10,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
        "0x76c5855e93bd498b6331652854c4549d34bc3a30"
      ],
      "royalties": []
    }
  ]
}

export const ownedTokenResponse = {
  "total": 13,
  "continuation": "1589810645000_0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
  "items": [
    {
      "id": "0x25646b08d9796ceda5fb8ce0105a51820740c049:0xc66d094ed928f7840a6b0d373c1cd825c97e3c7c00000000000000000000000a",
      "token": "0x25646b08d9796ceda5fb8ce0105a51820740c049",
      "tokenId": 8.975059459101017e+76,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x0de3015b646c40a0b72603a08558f74ab35084ba:0xfb571f9da71d1ac33e069571bf5c67fadcff18e4000000000000000000000001",
      "token": "0x0de3015b646c40a0b72603a08558f74ab35084ba",
      "tokenId": 1.1368445889348308e+77,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 8,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000011",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 17,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x0000000000000000000000000000000000000000000000000000000000000010",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 16,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60:0x000000000000000000000000000000000000000000000000000000000000000f",
      "token": "0x509fd4cdaa29be7b1fad251d8ea0fca2ca91eb60",
      "tokenId": 15,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": [
        {
          "recipient": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
          "value": 1000
        }
      ]
    },
    {
      "id": "0xd703958825feab56f9c7dd3906149c20416497e4:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xd703958825feab56f9c7dd3906149c20416497e4",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xd504e84b42947ee6f07dbe28763896ea3a2bc5e9:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xd504e84b42947ee6f07dbe28763896ea3a2bc5e9",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x0fe65b68eb627c21eaf3cfe8183c4f946f3d48bd:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0x0fe65b68eb627c21eaf3cfe8183c4f946f3d48bd",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xc5bbd75789bd007784a0046094d19acea1a79eb1:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xc5bbd75789bd007784a0046094d19acea1a79eb1",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xa2eebb837aef89369ad117568d75348e6174520e:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xa2eebb837aef89369ad117568d75348e6174520e",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xb8863180cac2d0ab665e5968c0de25298a1d8cee:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xb8863180cac2d0ab665e5968c0de25298a1d8cee",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0xa094e566b61b3c2d88acf7cc15e3dd0fa83f32af:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0xa094e566b61b3c2d88acf7cc15e3dd0fa83f32af",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 1,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4"
      ],
      "royalties": []
    },
    {
      "id": "0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496:0x0000000000000000000000000000000000000000000000000000000000000001",
      "token": "0x0a05c1027474f5c2a5f1f392da7d0a7a3e04f496",
      "tokenId": 1,
      "unlockable": false,
      "creator": "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
      "supply": 10,
      "owners": [
        "0xfb571f9da71d1ac33e069571bf5c67fadcff18e4",
        "0x76c5855e93bd498b6331652854c4549d34bc3a30"
      ],
      "royalties": []
    }
  ]
}