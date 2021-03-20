import React from "react";
import { useParams } from "react-router-dom";

const Chat = ({ firestore, currentWallet }) => {
  let { wallet } = useParams();
  const [messages, setMessages] = React.useState([]);

  const messagesRef = React.useMemo(() => {
    return currentWallet && firestore
      .collection("messages")
      .where("sender", "in", [
        currentWallet.toLowerCase(),
        wallet.toLowerCase(),
      ]);
  },[currentWallet, firestore]);

  React.useEffect(() => {
      console.log(messagesRef);
    if (messagesRef) {
      messagesRef.get().then((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
            console.log(doc.id, " => ", doc.data());
        });

        setMessages(list);
      });
    }
  }, [messagesRef]);

  console.log(messages);
  return (
    <div>
        {messages.map((message) => (
            <div>{message.content}</div> 
        ))}
      <input type="text" />
    </div>
  );
};

export default Chat;
