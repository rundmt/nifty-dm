import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ChatList from "./ChatList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 9;
  font-size: 16px;
  border-radius: 8px;
  background-color: #f7f7f7;
  padding: 12px;
  margin-right: 16px;
  border: none;
`;

const ChatName = styled.div`
  text-align: center;
  line-height: 40px;
  font-weight: 800;
  background-color: #f7f7f7;
  border-radius: 8px;
`;

const SubmitButton = styled.div`
  background: #21e0ea;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Chat = ({
  firestore,
  currentWallet,
  firebase,
  tokensOwned,
  tokensCreated,
}) => {
  let { wallet } = useParams();
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const messagesRef = React.useMemo(() => {
    return (
      currentWallet &&
      firestore
        .collection("messages")
        .where("sender", "in", [
          currentWallet.toLowerCase(),
          wallet.toLowerCase(),
        ])
        .orderBy("createdAt")
    );
  }, [currentWallet, firestore, wallet]);

  React.useEffect(() => {
    if (messagesRef) {
      const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });

        setMessages(list);
      });

      return unsubscribe;
    }
  }, [messagesRef]);

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

  return (
    <Container>
      <DashboardContainer>
        <ChatList tokensOwned={tokensOwned} tokensCreated={tokensCreated} />
      </DashboardContainer>
      <ChatContainer>
        <ChatName>{wallet}</ChatName>

        <MessagesContainer>
          {messages.map((message) => (
            <ChatRow isOwnMessage={message.sender === currentWallet}>
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
            placeholder="Aa"
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

      <InfoContainer>info</InfoContainer>
    </Container>
  );
};

export default Chat;
