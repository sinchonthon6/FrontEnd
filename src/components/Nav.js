import React from "react";
import styled from "styled-components";

//img
import menu from "../images/Menu.svg";
import person from "../images/person.svg";

const Nav = ({ setShowWrapper }) => {
  return (
    <Wrapper>
      <Menu src={menu} onClick={setShowWrapper}></Menu>
      <span>유니콘</span>
      <Person src={person}></Person>
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

const Person = styled.img`
  width: 37px;
  height: 37px;
  margin-right: 30px;
  cursor: pointer;
`;
