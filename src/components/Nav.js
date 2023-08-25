import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//img
import menu from "../images/Menu.svg";
import logo from "../images/LOGO.svg";
import person from "../images/person.svg";

const Nav = ({ showWrapper, setShowWrapper }) => {
  return (
    <Wrapper>
      <Menu
        src={menu}
        onClick={() => {
          setShowWrapper(!showWrapper);
        }}
      ></Menu>

      <Link to="/">
        <Logo src={logo} />
      </Link>

      <Link to="/Login">
        <Person src={person} />
      </Link>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  width: 390px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    width: auto;
    height: auto;
  }
`;

const Menu = styled.img`
  margin-left: 30px;
  width: 24.88px;
  height: 19.948px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 138px;
  height: 48px;
  cursor: pointer;
`;

const Person = styled.img`
  width: 37px;
  height: 37px;
  cursor: pointer;
`;
