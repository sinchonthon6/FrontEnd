import React from 'react';
import styled from 'styled-components';

//img
import logo from '../images/UNIVERSITY CONCERT.svg';
import search from '../images/Search.svg';

const Main = () => {
  return (
    <Wrapper>
      <Background />
      <Header>
        <img src={logo}></img>
        <div style={{marginTop: '12px'}}>
          신촌 지역 대학교 동아리 공연을 한눈에 !
        </div>
        <div style={{marginTop: '22px'}}>
          <button>공연 등록하러 가기</button>
          <button>공연 구경하러 가기</button>
        </div>
      </Header>
      <Search>
        <span>보고 싶은 공연이 있나요?</span>
        <div>
          <input placeholder='공연 이름 / 동아리 명' />
          <img src={search} />
        </div>
      </Search>
      <Today>
        <span>오늘의 추천 공연</span>
        <PosterContainer>
          <div>
            <img></img>
            <img></img>
            <img></img>
            <img></img>
          </div>
        </PosterContainer>
      </Today>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 390px;
  height: 774px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  width: 390px;
  height: 458px;
  background: var(
    --background,
    linear-gradient(
      225deg,
      rgba(167, 41, 227, 0.2) 0%,
      rgba(38, 35, 224, 0.18) 41.15%,
      rgba(229, 176, 96, 0.12) 62.5%,
      rgba(94, 91, 225, 0.07) 100%
    )
  );
`;

const Header = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;

    font-size: 12px;
    font-weight: 400;
  }

  div > button {
    z-index: 1;
    width: 129px;
    height: 39px;
    border-radius: 20px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;

    font-size: 12px;
    font-weight: 400;
  }
`;

const Search = styled.div`
  z-index: 1;
  margin-top: 40px;
  width: 341px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 20px;
  background: #fff;
  color: #000;

  span {
    margin-left: 29px;
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 17px;
  }

  input {
    width: 245px;
    height: 39px;
    border-radius: 30px;
    background: var(--purple-1, #e8e8fa);
    border: none;
    outline: none;
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
  }

  img {
    width: 22.647px;
    height: 22px;
    cursor: pointer;
  }
`;

const Today = styled.div`
  z-index: 1;
  margin-top: 25px;
  width: 390px;
  height: 387px;
  padding-top: 24px;
  padding-left: 28px;
  gap: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  span {
    margin-left: 0;
    font-size: 16px;
    font-weight: 700;
  }
`;

const PosterContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    white-space: nowrap;
  }

  div > img {
    width: 200px;
    height: 200px;
    border-radius: 30px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
