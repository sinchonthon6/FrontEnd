import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-US';

import Post from '../components/ShowPost/Post';

import {useAuth} from '../contexts/AuthContext';

registerLocale('en', en); // 영어 설정 등록

const ShowPost = ({selectedUniv, category}) => {
  const {BASE_URL} = useAuth();

  //기간 설정
  const [startDate, setStartDate] = useState(new Date()); //null로 해야 하나?
  const [endDate, setEndDate] = useState(new Date());

  // const formatDate = (date) => {
  //   if (!date) return '';
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const day = String(date.getDate()).padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // };

  // {formatDate(startDate)}

  //Get: 조회 결과
  const [posts, setPosts] = useState([]);
  const getResult = () => {
    axios
      .get(`${BASE_URL}home/lists/`, {
        school: selectedUniv,
        category: category,
        start: startDate,
        finish: endDate,
      })
      .then((response) => {
        setPosts(response.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error('조회 결과를 불러오는 중 오류가 발생했습니다.', error);
      });
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <Wrapper>
      <DateContainer>
        <div>공연을 보고 싶은 날짜가 언제인가요?</div>
        <BtnContainer>
          <SetDateBtn
            locale='en'
            dateFormat='MMMM dd, yyyy'
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <span>~</span>
          <SetDateBtn
            locale='en'
            dateFormat='MMMM dd, yyyy'
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
          />
        </BtnContainer>
      </DateContainer>
      <List>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </List>
    </Wrapper>
  );
};

export default ShowPost;

const Wrapper = styled.div`
  width: 390px;
  height: 774px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2fd;
`;

const DateContainer = styled.div`
  margin-top: 25px;
  width: 351px;
  height: 96px;
  padding: 19px 45px;
  gap: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;

  div {
    color: #2a297b;
    font-size: 12px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: #969696;
`;

const SetDateBtn = styled(DatePicker)`
  width: 119px;
  height: 31px;
  border-radius: 10px;
  background: #f2f2fd;
  text-align: center;
  border: none;

  color: #969696;
`;

const List = styled.div`
  margin-top: 18px;
  width: 351px;
  height: 570px; //나중에 100%로 변경하기
  padding: 19px 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background: #fff;
`;
