import React from "react";
import { useParams } from "react-router-dom";

const Chat = ({ firestore, currentWallet }) => {
  let { wallet } = useParams();
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("")

  const messagesRef = React.useMemo(() => {
    return currentWallet && firestore
      .collection("messages")
      .where("sender", "in", [
        currentWallet.toLowerCase(),
        wallet.toLowerCase(),
      ]);
  },[currentWallet, firestore]);

  React.useEffect(() => {
    if (messagesRef) {
      const unsubscribe = messagesRef.onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
            list.push(doc.data());
        });

        setMessages(list);
      });

      return unsubscribe
    }
  }, [messagesRef]);

  const onChangeInput = React.useCallback((ev) => {
    setInput(ev.currentTarget.value)
  }, [])

  const onSubmit = React.useCallback(() => {
    const data = {
        sender: currentWallet.toLowerCase(),
        receiver: wallet.toLowerCase(),
        content: input
    }

    setInput("");

    firestore.collection("messages").add(data).then(() => {
        console.log("Document successfully written!");
    });

  },[currentWallet, wallet, input])

  return (
    <div>
        {messages.map((message) => (
            <div>{message.content}</div> 
        ))}
      <input type="text" onChange={onChangeInput} value={input} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Chat;
