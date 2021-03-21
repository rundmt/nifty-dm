import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  height: 100vh;
  box-sizing: border-box;
`;

const DashboardContainer = styled.div`
  grid-column-start: 1;
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
  overflow-y: scroll;
  padding: 8px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 9;
  font-size: 16px;
`;

const ChatName = styled.div`
  text-align: center;
  line-height: 40px;
  font-weight: 800;
  background-color: lightgray;
`;

const Chat = ({ firestore, currentWallet, firebase }) => {
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
      <DashboardContainer></DashboardContainer>
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
          />
          <button onClick={onSubmit}>Submit</button>
        </InputContainer>
      </ChatContainer>
    </Container>
  );
};

export default Chat;
