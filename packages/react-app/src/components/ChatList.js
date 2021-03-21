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

import {
  TabContainer,
  Tab,
  Input,
  StyledNavLink,
  backgroundDark
} from "./index"

library.add(faCoins, faWallet, faComments);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const TokenIcon = styled.div`
  margin-right: 24px;
  display: flex;
  width: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
  width: 100%;
`;

const TokenName = styled.div`
  margin-left: 8px;
`;

const ChatList = ({ tokensOwned, tokensCreated }) => {
  const history = useHistory();
  const [value, setValue] = React.useState("");
  const tokens = React.useMemo(() => {
    const includesFilter = (token) => token.name.toLowerCase().includes(value);

    if (history.location.search === "?type=owned") {
      return tokensOwned.filter(includesFilter);
    }

    return tokensCreated.filter(includesFilter);
  }, [history.location.search, tokensCreated, tokensOwned, value]);

  console.log(history);

  const onChange = React.useCallback((ev) => {
    setValue(ev.currentTarget.value);
  }, []);

  return (
    <Container>
      <TabContainer>
      <Tab>
          <StyledNavLink
            to={{
              pathname: history.location.pathname,
              search: "?type=created",
            }}
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
            activeStyle={{
              fontWeight: "bold",
              color: backgroundDark,
            }}
            isActive={() => history.location.search === "?type=owned"}
          >
            Owned
          </StyledNavLink>
        </Tab>
      </TabContainer>
      <Input
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
                <StyledNavLink
                  to={`/chat/${token.owner}/${token.id}`}
                  isActive={() => history.location.pathname === `/chat/${token.owner}/${token.id}`}
                  activeStyle={{
                    fontWeight: "bold",
                    color: backgroundDark,
                  }}
                >
                  <IconWrapper>
                    <FontAwesomeIcon
                      color="gold"
                      size="2x"
                      icon={["fas", "coins"]}
                    />
                    <TokenName>{token.name}</TokenName>
                  </IconWrapper>
                </StyledNavLink>
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

export default ChatList;
