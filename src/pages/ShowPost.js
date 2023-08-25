import React from 'react';
import styled from 'styled-components';

const ShowPost = () => {
  return (
    <Wrapper>
      <Date>
        <div>공연을 보고 싶은 날짜가 언제인가요?</div>
        <BtnContainer>
          <SetDateBtn />
          <SetDateBtn />
        </BtnContainer>
      </Date>
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

const Date = styled.div`
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
    width: auto;
    height: auto;
    font-size: 12px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SetDateBtn = styled.div`
  width: 119px;
  height: 31px;
  border-radius: 10px;
  background: #f2f2fd;
`;
