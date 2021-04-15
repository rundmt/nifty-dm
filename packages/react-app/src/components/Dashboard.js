import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoins,
  faWallet,
  faComments,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  TabContainer,
  Tab,
  StyledLink,
  Token,
  TokenIcon,
  TokenLabel,
  Input,
  InputContainer,
  StyledNavLink,
  backgroundDark
} from "./index"

library.add(faCoins, faWallet, faComments, faPaperPlane);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
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
          <StyledNavLink
            to={{
              pathname: history.location.pathname,
              search: "?type=created",
            }}
            onClick={setCreated}
            activeStyle={{
              fontWeight: "bold",
              color: backgroundDark,
            }}
            isActive={() => history.location.search === "?type=created"}
          >
            Created
          </StyledNavLink>
        </Tab>
        <Tab>
          <StyledNavLink
            to={{
              pathname: history.location.pathname,
              search: "?type=owned",
            }}
            onClick={setOwned}
            activeStyle={{
              fontWeight: "bold",
              color: backgroundDark,
            }}
            isActive={() => history.location.search === "?type=owned"}
          >
            Owned
          </StyledNavLink>
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
              <StyledLink to={`/chat/${token.owner}/${token.id}`}>
                <Token>
                  <TokenIcon
                    src={token["external_url"]}
                    alt="test"
                    height="200px"
                    width="200px"
                  />
                  <TokenLabel>{token.name}</TokenLabel>
                </Token>
              </StyledLink>
            );
          })}
        </ChatContainer>
      </Section>
      <SectionHeader>Wallets</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <StyledLink to={`/chat/`}>
              <FontAwesomeIcon
                color="brown"
                size="2x"
                icon={["fas", "wallet"]}
              />
            </StyledLink>
          </Token>
        </ChatContainer>
      </Section>
      <SectionHeader>Group</SectionHeader>
      <Section>
        <ChatContainer>
          <Token>
            <StyledLink to={`/chat/`}>
              <FontAwesomeIcon
                color="purple"
                size="2x"
                icon={["fas", "comments"]}
              />
            </StyledLink>
          </Token>
        </ChatContainer>
      </Section>
    </Container>
  );
};

export default Dashboard;
