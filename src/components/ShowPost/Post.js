import React from 'react';
import styled from 'styled-components';

const Post = () => {
  return (
    <Wrapper>
      <Poster />
      <TextContainer>
        <Title>[Mel5dy] 9월 공연 보러오세요~🎵</Title>
        <div>
          <Author>Mel5dy</Author>
          <Period>2023.08.25~2023.08.27</Period>
        </div>
        <HashTag>
          {/* 데이터 받아서 map으로 돌리기 */}
          <div>#홍익대</div>
        </HashTag>
      </TextContainer>
    </Wrapper>
  );
};

export default Post;

const Wrapper = styled.div`
  width: 314px;
  height: 127px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #ddd;

  color: #000;
`;

const Poster = styled.img`
  margin-left: 15px;
  width: 70px;
  height: 89.798px;
  border-radius: 10px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
`;

const TextContainer = styled.div`
  margin-right: 12px;
  height: 89.798px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  font-family: Inter;
  font-style: normal;
  line-height: normal;

  div {
    width: 201px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
  }
`;

const Title = styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 12px;
  font-weight: 700;
`;

const Author = styled.div`
  font-size: 10px;
  font-weight: 700;
`;

const Period = styled.div`
  color: #717171;
  text-align: right;
  font-size: 10px;
  font-weight: 400;
`;

const HashTag = styled.div`
  color: #6c6ade;
  font-size: 10px;
  font-weight: 400;
`;
