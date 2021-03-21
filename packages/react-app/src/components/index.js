import styled from "styled-components";
import { Link as RouterLink, NavLink } from "react-router-dom";

export const backgroundDark = '#070037'

export const HeaderH1 = styled.h1`
  display: inline;
  margin-left: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Header = styled.header`
  background-color: ${backgroundDark};
  min-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Body = styled.div`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: calc(100vh - 70px);
`;

export const Image = styled.img`
  pointer-events: none;
`;

export const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  color: #61dafb;
  margin-top: 10px;
  text-decoration: none;
`;

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 8px;
  color: #282c34;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 12px 24px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;

export const TabContainer = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  width: calc(100% - 20px);
  background-color: lightgray;
`;

export const Tab = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  padding: 20px;
  border: 1px darkgray solid;
  border-bottom: 0px;
`;

export const StyledLink = styled(RouterLink)`
text-decoration: none;
color: dimgray;
`;

export const Token = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TokenIcon = styled.img`
  border-radius: 99px;
`;

export const TokenLabel = styled.div`
  margin: 20px;
`;

export const Input = styled.input`
flex: 9;
font-size: 16px;
border-radius: 8px;
background-color: #f7f7f7;
padding: 12px;
margin-right: 16px;
border: none;
`;

export const InputContainer = styled.div`
display: flex;
`;

export const WalletIcon = styled.div`
width: 48px;
height: 48px;
background-color: green;
margin-right: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  color: darkgray;
  text-decoration: none;
`;
