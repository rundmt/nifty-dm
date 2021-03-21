import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoins,
  faWallet,
  faComments,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCoins, faWallet, faComments, faPaperPlane);

const backgroundDark = "#070037";

const StyleLink = styled(Link)`
  text-decoration: none;
  color: dimgray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  width: 100%;
  background-color: lightgray;
`;

const Tab = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  padding: 20px;
  border: 1px darkgray solid;
  border-bottom: 0px;
`;

const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  width: 100%;
`;

const ChatContainer = styled.div`
  border-top: 1px darkgray solid;
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

const TokenLabel = styled.div`
  margin: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
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

const COLLECTIONS = {
  OWNED: "owner",
  CREATED: "creator",
};

const Dashboard = ({ tokensOwned, tokensCreated }) => {
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const [tokenType, setTokenType] = React.useState("owned");
  const tokens = React.useMemo(() => {
    const includesFilter = (token) => token.name.toLowerCase().includes(value);

    if (tokenType === COLLECTIONS.OWNED) {
      return tokensOwned;
    }

    return tokensCreated;
  }, [tokenType, tokensCreated, tokensOwned, value]);

  const onChange = React.useCallback((ev) => {
    setValue(ev.currentTarget.value);
  }, []);

  const setCreated = () => {
    setTokenType(COLLECTIONS.CREATED);
  };

  const setOwned = () => {
    setTokenType(COLLECTIONS.OWNED);
  };

  console.log(history.location.search);

  return (
    <Container>
      <TabContainer>
        <Tab>
          <NavLink
            to={{
              pathname: history.location.pathname,
              search: "?type=created",
            }}
            onClick={setCreated}
            style={{
              color: "darkgray",
              textDecoration: "none",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: backgroundDark,
            }}
            isActive={() => history.location.search === "?type=created"}
          >
            Created
          </NavLink>
        </Tab>
        <Tab>
          <NavLink
            to={{
              pathname: history.location.pathname,
              search: "?type=owned",
            }}
            onClick={setOwned}
            style={{
              color: "darkgray",
              textDecoration: "none",
            }}
            activeStyle={{
              fontWeight: "bold",
              color: backgroundDark,
            }}
            isActive={() => history.location.search === "?type=owned"}
          >
            Owned
          </NavLink>
        </Tab>
        <SearchContainer>
          <InputContainer>
            <Input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="search"
            />
          </InputContainer>
        </SearchContainer>
      </TabContainer>
      <SectionHeader>Tokens</SectionHeader>
      <Section>
        <ChatContainer>
          {tokens.map((token) => {
            return (
              <StyleLink to={`/chat/${token.owner}/${token.id}`}>
                <Token>
                  <TokenIcon
                    src={token["external_url"]}
                    alt="test"
                    height="200px"
                    width="200px"
                  />
                  <TokenLabel>{token.name}</TokenLabel>
                </Token>
              </StyleLink>
            );
          })}
        </ChatContainer>
      </Section>
      <SectionHeader>Wallets</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <StyleLink to={`/chat/`}>
              <FontAwesomeIcon
                color="brown"
                size="2x"
                icon={["fas", "wallet"]}
              />
            </StyleLink>
          </Token>
        </ChatContainer>
      </Section>
      <SectionHeader>Group</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <StyleLink to={`/chat/`}>
              <FontAwesomeIcon
                color="purple"
                size="2x"
                icon={["fas", "comments"]}
              />
            </StyleLink>
          </Token>
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Dashboard;
