import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ChatList from "./ChatList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../nftydmLogo.png";
import {
  TokenLabel,
  Input,
  InputContainer,
  Image,
  StyledLink
} from "./index"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
  box-sizing: border-box;
`;

const DashboardContainer = styled.div`
  grid-column-start: 1;
  border-right: 1px solid black;
`;

const InfoContainer = styled.div`
  grid-column-start: 3;
  border-left: 1px solid black;
  padding: 12px;
`;

const ChatContainer = styled.div`
  grid-column-start: 2;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  box-sizing: border-box;
`;

const ChatRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.isOwnMessage ? "flex-end" : "flex-start"};
  margin-bottom: 5px;
`;

const ChatMessage = styled.div`
  background-color: ${(props) => (props.isOwnMessage ? "#21e0ea" : "#8f2ffd")};
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
`;

const MessagesContainer = styled.div`
  flex: 12;
  display: "flex";
  flex-direction: column;
  overflow-y: auto;
  padding: 8px;
`;

const ChatName = styled.div`
  text-align: center;
  line-height: 40px;
  font-weight: 800;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const SubmitButton = styled.div`
  cursor: pointer;
  background: #21e0ea;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const TokenImage = styled.img`
  width: 100%;
`;

const InfoHeader = styled.h2`
  font-weight: 800;
  text-align: center;
`;

const Chat = ({
  firestore,
  currentWallet,
  firebase,
  tokensOwned,
  tokensCreated,
}) => {
  let { wallet, token } = useParams();
  const [messagesSent, setMessagesSent] = React.useState([]);
  const [messagesReceived, setMessagesReceived] = React.useState([]);
  const [input, setInput] = React.useState("");

  console.log({ token });

  const messagesRef = React.useMemo(() => {
    return (
      currentWallet &&
      firestore
        .collection("messages")
        .where("sender", "==", currentWallet.toLowerCase())
        .where("receiver", "==", wallet.toLowerCase())
        .orderBy("createdAt")
    );
  }, [currentWallet, firestore, wallet]);

  const reverseMessagesRef = React.useMemo(() => {
    return (
      currentWallet &&
      firestore
        .collection("messages")
        .where("sender", "==", wallet.toLowerCase())
        .where("receiver", "==", currentWallet.toLowerCase())
        .orderBy("createdAt")
    );
  }, [currentWallet, firestore, wallet]);

  React.useEffect(() => {
    if (messagesRef && reverseMessagesRef) {
      const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setMessagesSent(list);
      });

      const unsubscribeReverse = reverseMessagesRef.onSnapshot(
        (querySnapshot) => {
          const list = [];
          querySnapshot.forEach((doc) => {
            list.push(doc.data());
          });

          setMessagesReceived(list);
        }
      );

      return () => {
        unsubscribe();
        unsubscribeReverse();
      };
    }
  }, [messagesRef, reverseMessagesRef]);

  const messages = React.useMemo(() => {
    return [...messagesReceived, ...messagesSent].sort(
      (a, b) => a.createdAt.seconds - b.createdAt.seconds
    );
  }, [messagesReceived, messagesSent]);

  const onChangeInput = React.useCallback((ev) => {
    setInput(ev.currentTarget.value);
  }, []);

  const onSubmit = React.useCallback(() => {
    const data = {
      sender: currentWallet.toLowerCase(),
      receiver: wallet.toLowerCase(),
      content: input,
      createdAt: firebase.firestore.Timestamp.now(),
    };

    setInput("");

    firestore
      .collection("messages")
      .add(data)
      .then(() => {
        console.log("Document successfully written!");
      });
  }, [firebase.firestore, currentWallet, wallet, input, firestore]);

  const onKeyDown = React.useCallback(
    (ev) => {
      if (ev.keyCode === 13) {
        onSubmit();
      }
    },
    [onSubmit]
  );

  const selectedToken = [...tokensOwned, ...tokensCreated].find(
    (t) => t.id === token
  );

  const tokenURL = selectedToken ? selectedToken["external_url"] : "";
  const tokenDescription = selectedToken ? selectedToken["description"] : "";
  const tokenOwner = selectedToken ? selectedToken["owner"] : "";

  return (
    <Container>
      <DashboardContainer>
        <ChatList tokensOwned={tokensOwned} tokensCreated={tokensCreated} />
      </DashboardContainer>
      <ChatContainer>
        <ChatName>{wallet}</ChatName>
        <MessagesContainer>
          {messages.map((message) => (
            <ChatRow
              key={message.id}
              isOwnMessage={message.sender === currentWallet}
            >
              <ChatMessage isOwnMessage={message.sender === currentWallet}>
                {message.content}
              </ChatMessage>
            </ChatRow>
          ))}
        </MessagesContainer>
        <InputContainer>
          <Input
            type="text"
            onChange={onChangeInput}
            onKeyDown={onKeyDown}
            value={input}
            placeholder="Message"
          />
          <SubmitButton onClick={onSubmit}>
            <FontAwesomeIcon
              color="white"
              size="1x"
              icon={["fas", "paper-plane"]}
            />
          </SubmitButton>
      </InputContainer>
    </ChatContainer>
    <InfoContainer>
        <StyledLink to="/">
          <div style={{ display: 'flex', justifyContent: 'center', padding: "20px" }}>
            <Image src={logo} alt="nfty-dm-logo" height="100px" width="100px" />
          </div>
        </StyledLink>
        <InfoHeader>Token</InfoHeader>
        <TokenImage src={tokenURL} />
        <TokenLabel>description: {tokenDescription}</TokenLabel>
        <TokenLabel>owner: {tokenOwner}</TokenLabel>
      </InfoContainer>
    </Container>
  );
};

export default Chat;
