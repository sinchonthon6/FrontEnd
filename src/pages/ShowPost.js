import React, {useState} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-US';
import Post from '../components/ShowPost/Post';

registerLocale('en', en); // 영어 설정 등록

const ShowPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
        <Post></Post>
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
