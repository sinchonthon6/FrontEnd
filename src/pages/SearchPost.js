import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Post from '../components/ShowPost/Post';

import {useAuth} from '../contexts/AuthContext';

const SearchPost = ({searchKeyword}) => {
  const {BASE_URL} = useAuth();

  const [isSearchOn, setSearchOn] = useState(false);
  const [posts, setPosts] = useState([]);
  
  const getResult = () => {
    if (searchKeyword) {
      axios
        .get(`${BASE_URL}details/search/?keyword=${searchKeyword}/`)
        .then((response) => {
          setSearchOn(true);
          setPosts(response.data);
          console.log(response.data.data);
        })
        .catch((error) => {
          console.error('검색 결과를 불러오는 중 오류가 발생했습니다.', error);
        });
    }
  };

  return (
    <Wrapper>
      <List>
        {isSearchOn ? (
          <>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </List>
    </Wrapper>
  );
};

export default SearchPost;

const Wrapper = styled.div`
  width: 390px;
  height: 774px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2fd;
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
