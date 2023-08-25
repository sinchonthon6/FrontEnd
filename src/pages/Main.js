import React from "react";
import styled from "styled-components";
import category from "../images/category.png";
import band from "../images/band.png";
import art from "../images/art.png";
import dance from "../images/dance.png";
import etc from "../images/etc.png";
import play from "../images/play.png";
import sports from "../images/sports.png";
import React from 'react';
import styled from 'styled-components';
import logo from '../images/UNIVERSITY CONCERT.svg';
import search from '../images/Search.svg';

const Main = ({showWrapper}) => {
  return (
    <Wrapper>
          <SelectBox>
        <SelectButton>전체</SelectButton>
        <SelectButton>서강대학교</SelectButton>
        <SelectButton>연세대학교</SelectButton>
        <SelectButton>이화여자대학교</SelectButton>
        <SelectButton>홍익대학교</SelectButton>
      </SelectBox>
      <DetailBox>
        <Advise>
          <div className="caption">
            <div className="caption1">무더운 여름</div>
            <div className="caption2">시원한 밴드 공연 어떠세요?</div>
          </div>
        </Advise>
        <Category>
          <div className="box band">
            <div className="image-container">
              <img src={band} alt="밴드" />
            </div>
            <span>밴드</span>
          </div>
          <div className="box dance">
            <div className="image-container">
              <img src={dance} alt="댄스" />
            </div>
            <span>댄스</span>
          </div>
          <div className="box art">
            <div className="image-container">
              <img src={art} alt="전시" />
            </div>
            <span>전시</span>
          </div>
        </Category>
        <Category>
          <div className="box play">
            <div className="image-container">
              <img src={play} alt="연극" />
            </div>
            <span>연극</span>
          </div>
          <div className="box sports">
            <div className="image-container">
              <img src={sports} alt="스포츠" />
            </div>
            <span>스포츠</span>
          </div>
          <div className="box etc">
            <div className="image-container">
              <img src={etc} alt="기타" />
            </div>
            <span>기타</span>
          </div>
        </Category>
      </DetailBox>
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
  background: #f2f2fd;
  position: relative;
`;

const SelectBox = styled.div`
  width: 137px;
  background-color: rgba(227, 227, 249, 0.81);
  height: 774px;
  position: absolute;
  top: 0;
  left: 0;
`;
const SelectButton = styled.div`
  width: 137px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailBox = styled.div`
  position: absolute;
  top: 0;
  left: 137px;
  background-color: white;
  width: 253px;
  height: 774px;
`;

const Advise = styled.div`
  /* Rectangle 10 */
  box-sizing: border-box;
  margin: 18px auto 0px;
  width: 202px;
  height: 111px;
  left: 26px;
  top: 18px;
  font-size: 12px;
  background: url(.jpg), #d9d9d9;
  border-radius: 20px;
  padding-top: 65px;
  background: url(${category});
  background-size: cover;

  .caption {
    font-size: 12px;
    font-weight: 600;
    color: white;
    margin: 0 18px 0;
  }
  .caption1 {
    text-align: right;
  }
  .caption2 {
    text-align: right;
  }
`;

const Category = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
  gap: 15px;
  margin-top: 29px;
  margin-bottom: 27px;
  .box {
    display: flex;
    flex-direction: column;
  }
  .image-container {
    width: 50px;
    height: 51px;
    background-color: #f4f4f4;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-container img {
    display: block;
    width: 30px;
  }
  span {
    display: block;
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
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
