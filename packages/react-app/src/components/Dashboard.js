import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoins,
  faWallet,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCoins, faWallet, faComments);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Token = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TokenIcon = styled.img`
  border-radius: 99px;
`;

const WalletIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: green;
  margin-right: 24px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
`;

const Dashboard = ({ tokensOwned, tokensCreated }) => {
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const tokens = React.useMemo(() => {
    const includesFilter = (token) => token.name.toLowerCase().includes(value);

    if (history.location.search === "?type=owned") {
      return tokensOwned.filter(includesFilter);
    }

    return tokensCreated.filter(includesFilter);
  }, [history.location.search, tokensCreated, tokensOwned, value]);

  const onChange = React.useCallback((ev) => {
    setValue(ev.currentTarget.value);
  }, []);

  return (
    <Container>
      <Link
        to={{
          pathname: "/",
          search: "?type=created",
        }}
      >
        Created
      </Link>
      <Link
        to={{
          pathname: "/",
          search: "?type=owned",
        }}
      >
        Owned
      </Link>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
      <SectionHeader>Tokens</SectionHeader>
      <Section>
        <ChatContainer>
          {tokens.map((token) => {
            console.log('token', token['external_url']);
            return (
              <Token>
                <TokenIcon src={token['external_url']} alt="test" height="200px" width="200px" />
                {/* TODO get the wallet owner of the token to chat */}
                <Link to="">
                  <div>{token.name}</div>
                </Link>
              </Token>
            );
          })}
        </ChatContainer>
      </Section>
      <SectionHeader>Wallets</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <Link to={`/chat/`}>
              <FontAwesomeIcon
                color="brown"
                size="2x"
                icon={["fas", "wallet"]}
              />
            </Link>
          </Token>
        </ChatContainer>
      </Section>
      <SectionHeader>Group</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <Link to={`/chat/`}>
              <FontAwesomeIcon
                color="purple"
                size="2x"
                icon={["fas", "comments"]}
              />
            </Link>
          </Token>
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Dashboard;
