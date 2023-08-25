
import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';


//img
import people from "../images/people.svg";
import calendar from "../images/calendar.svg";
import location from "../images/location.svg";
import time from "../images/time.svg";
import money from "../images/money.svg";
import phone from "../images/phone.svg";

import { useAuth } from "../contexts/AuthContext";

const DetailPost = () => {

  const {authToken, BASE_URL} = useAuth();
  const {eventId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [dday, setDday] = useState('');
  const getPosts = () => {
    axios
      .get(`${BASE_URL}details/${eventId}`, {
        // headers: {
        //   Authorization: `Bearer ${authToken}`,
        // },
      })
      .then((response) => {
        setPosts(response.data.data);
        setDday(response.data.dday);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("상세정보를 불러오는 중 오류가 발생했습니다.", error);
      });
  };

  return (
    <Wrapper>
      <Background />
      <Detail>DETAIL</Detail>
      <PostBox>
        <Day>D-{dday}</Day>
        <Title>
          [{posts.circle_name}] {posts.title}
        </Title>
        <HashTag>
          <div>#{posts.school}</div>
          <div>#{posts.category}</div>
        </HashTag>

        <Poster>

          <ImgContainer>
            <div>
              <img src={`${BASE_URL}${posts.img}`} />
              {posts.img_detail_1 && (
                <img src={`${BASE_URL}${posts.img_detail_1}`} />
              )}
              {posts.img_detail_2 && (
                <img src={`${BASE_URL}${posts.img_detail_2}`} />
              )}
            </div>
          </ImgContainer>
        </Poster>
        <Hr />

        <InfoContainer>
          <div>
            <img src={people} />
            <span>{posts.circle_name}</span>
          </div>
          <div>
            <img src={calendar} />
            <span>
              {posts.start_day} ~ {posts.finish_day}
            </span>
          </div>
          {posts.locate && (
            <div>
              <img src={location} />
              <span>{posts.locate}</span>
            </div>
          )}
          <div>
            <img src={time} />
            <span>{posts.long}</span>
          </div>
          <div>
            <img src={money} />
            <span>{posts.pay}원</span>
          </div>
          <div>
            <img src={phone} />
            <span>{posts.contact}</span>
          </div>
        </InfoContainer>
        <Hr />

        <TextContainer>{posts.detail}</TextContainer>
      </PostBox>
      {/* <ListBox>수정</ListBox> */}
      <ListBox onClick={() => navigate('/post')}>목록</ListBox>
    </Wrapper>
  );
};

export default DetailPost;

const ScrollContainer = styled.div``;

const Wrapper = styled.div`
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2fd;
  color: #000;
`;

const Background = styled.div`
  position: absolute;
  width: 390px;
  height: 1295px;
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

const Detail = styled.div`
  margin-top: 53px;
  margin-bottom: 53px;

  font-size: 24px;
  font-weight: 800;
`;

const PostBox = styled.div`
  z-index: 1;
  width: 352px;
  height: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.1);
`;

const Hr = styled.div`
  width: 352px;
  height: 7px;
  background: #f4f4f4;
`;

const Day = styled.div`
  margin-top: 22px;
  width: 104px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #6c6ade;
  color: #6c6ade;
  font-size: 20px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-top: 19px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 800;
`;

const HashTag = styled.div`
  margin-top: 15px;
  margin-bottom: 12.7px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: #6c6ade;
  font-size: 13px;
  font-weight: 400;
`;

const Poster = styled.div`
  z-index: 2;
  width: 352px;
  height: 311px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: relative;
`;

const ImgContainer = styled.div`
  z-index: 2;
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
    gap: 8px;
    white-space: nowrap;
  }

  img {
    width: 233px;
    height: 311px;
    border-radius: 10px;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;

const InfoContainer = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    width: 311px;
    display: flex;
    flex-direction: row;
    gap: 9px;
  }

  div > img {
    margin: 0;
    width: 24px;
    height: 24px;
  }

  div > span {
    width: auto;
    margin: 0;
  }
`;

const TextContainer = styled.div`
  padding: 30px 20px;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: 400;
`;

const ListBox = styled.div`
  z-index: 1;
  margin-top: 19px;
  margin-bottom: 125px;
  width: 352px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.1);

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;
`;
