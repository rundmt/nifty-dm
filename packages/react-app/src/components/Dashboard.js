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

const TokenIcon = styled.div`
  margin-right: 24px;
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
            return (
              <TokenIcon>
                {/* TODO get the wallet owner of the token to chat */}
                <Link to="">
                  <FontAwesomeIcon
                    color="gold"
                    size="2x"
                    icon={["fas", "coins"]}
                  />
                  <div>{token.name}</div>
                </Link>
              </TokenIcon>
            );
          })}
        </ChatContainer>
      </Section>
      <SectionHeader>Wallets</SectionHeader>
      <Section>
        <ChatContainer>
          <TokenIcon>
            <Link to={`/chat/`}>
              <FontAwesomeIcon
                color="brown"
                size="2x"
                icon={["fas", "wallet"]}
              />
            </Link>
          </TokenIcon>
        </ChatContainer>
      </Section>
      <SectionHeader>Group</SectionHeader>
      <Section>
        <ChatContainer>
          <TokenIcon>
            <Link to={`/chat/`}>
              <FontAwesomeIcon
                color="purple"
                size="2x"
                icon={["fas", "comments"]}
              />
            </Link>
          </TokenIcon>
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Dashboard;
