import React from "react";
import { Contract } from "@ethersproject/contracts";
import { getDefaultProvider } from "@ethersproject/providers";
import { useQuery } from "@apollo/react-hooks";

import { Body, Button, Header, Image, Link } from "./components";
import logo from "./ethereumLogo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";

import { addresses, abis } from "@project/contracts";
import GET_TRANSFERS from "./graphql/subgraph";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import firebase from "firebase";
import Web3 from "web3";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

async function readOnChainData() {
  // Should replace with the end-user wallet, e.g. Metamask
  const defaultProvider = getDefaultProvider();
  // Create an instance of an ethers.js Contract
  // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
  const ceaErc20 = new Contract(
    addresses.ceaErc20,
    abis.erc20,
    defaultProvider
  );
  // A pre-defined address that owns some CEAERC20 tokens
  const tokenBalance = await ceaErc20.balanceOf(
    "0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"
  );
  console.log({ tokenBalance: tokenBalance.toString() });
}

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  return (
    <Button
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {!provider ? "Connect Wallet" : "Disconnect Wallet"}
    </Button>
  );
}

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber
      }
    ]
  });
  console.log(web3);
  return web3;
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();
  const [currentWallet, setCurrentWallet] = React.useState("")

  React.useEffect(() => {
    if (!provider) {
      return;
    }

    console.log(provider);

    setCurrentWallet(provider.provider.selectedAddress);


  }, [provider]);

  console.log(currentWallet);

  return (
    <Router>
      <Route path="/" exact>
        <div>
          <Header>
            <WalletButton
              provider={provider}
              loadWeb3Modal={loadWeb3Modal}
              logoutOfWeb3Modal={logoutOfWeb3Modal}
            />
          </Header>
          <Body>
            <Image src={logo} alt="react-logo" />
            <p>
              Edit <code>packages/react-app/src/App.js</code> and save to
              reload.
            </p>
            {/* Remove the "hidden" prop and open the JavaScript console in the browser to see what this function does */}
            <Button onClick={() => readOnChainData()}>
              Read On-Chain Balance
            </Button>
            <Link
              href="https://ethereum.org/developers/#getting-started"
              style={{ marginTop: "8px" }}
            >
              Learn Ethereum
            </Link>
            <Link href="https://reactjs.org">Learn React</Link>
            <Link href="https://thegraph.com/docs/quick-start">
              Learn The Graph
            </Link>
          </Body>
        </div>
      </Route>
      <Route path="/chat/:wallet">
        <Chat firestore={db} currentWallet={currentWallet} />
      </Route>
    </Router>
  );
}

export default App;
