import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {useAuth} from '../../contexts/AuthContext';

const Post = ({post}) => {
  const navigate = useNavigate();
  const {BASE_URL} = useAuth();

  return (
    <Wrapper onClick={() => navigate(`/post/${post.id}`)}>
      <Poster src={`${BASE_URL}${post.img}`} />
      <TextContainer>
        <Title>
          [{post.circle_name}] {post.title}
        </Title>
        <div>
          <Author>{post.circle_name}</Author>
          <Period>
            {post.start_day}~{post.finish_day}
          </Period>
        </div>
        <HashTag>
          {/* 데이터 받아서 map으로 돌리기 */}
          <div>#{post.school}</div>
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
  white-space: nowrap;
`;

const HashTag = styled.div`
  color: #6c6ade;
  font-size: 10px;
  font-weight: 400;
`;
