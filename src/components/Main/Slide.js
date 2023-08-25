import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';

//img
import category from '../../images/category.png';
import band from '../../images/band.png';
import art from '../../images/art.png';
import dance from '../../images/dance.png';
import etc from '../../images/etc.png';
import play from '../../images/play.png';
import sports from '../../images/sports.png';

const Slide = (props) => {
  const {selectedUniv, setSelectedUniv, setCategory} = props;
  const navigate = useNavigate();

  const selectUniv = (univ) => {
    setSelectedUniv(univ);
  };

  return (
    <Wrapper>
      <Container>
        <SelectBox>
          <SelectButton
            selected={selectedUniv === 'all'}
            onClick={() => {
              selectUniv('all');
            }}
          >
            전체
          </SelectButton>
          <SelectButton
            selected={selectedUniv === '서강대학교'}
            onClick={() => {
              selectUniv('서강대학교');
            }}
          >
            서강대학교
          </SelectButton>
          <SelectButton
            selected={selectedUniv === '연세대학교'}
            onClick={() => {
              selectUniv('연세대학교');
            }}
          >
            연세대학교
          </SelectButton>
          <SelectButton
            selected={selectedUniv === '이화여자대학교'}
            onClick={() => {
              selectUniv('이화여자대학교');
            }}
          >
            이화여자대학교
          </SelectButton>
          <SelectButton
            selected={selectedUniv === '홍익대학교'}
            onClick={() => {
              selectUniv('홍익대학교');
            }}
          >
            홍익대학교
          </SelectButton>
        </SelectBox>
        <DetailBox>
          <Advise>
            <div className='caption'>
              <div className='caption1'>무더운 여름</div>
              <div className='caption2'>시원한 밴드 공연 어떠세요?</div>
            </div>
          </Advise>
          <Category>
            <div
              className='box band'
              onClick={() => {
                setCategory('밴드');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={band} alt='밴드' />
              </div>
              <span>밴드</span>
            </div>
            <div
              className='box dance'
              onClick={() => {
                setCategory('댄스');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={dance} alt='댄스' />
              </div>
              <span>댄스</span>
            </div>
            <div
              className='box art'
              onClick={() => {
                setCategory('전시');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={art} alt='전시' />
              </div>
              <span>전시</span>
            </div>
          </Category>
          <Category>
            <div
              className='box play'
              onClick={() => {
                setCategory('연극');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={play} alt='연극' />
              </div>
              <span>연극</span>
            </div>
            <div
              className='box sports'
              onClick={() => {
                setCategory('스포츠');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={sports} alt='스포츠' />
              </div>
              <span>스포츠</span>
            </div>
            <div
              className='box etc'
              onClick={() => {
                setCategory('기타');
                navigate('/post');
              }}
            >
              <div className='image-container'>
                <img src={etc} alt='기타' />
              </div>
              <span>기타</span>
            </div>
          </Category>
        </DetailBox>
      </Container>
    </Wrapper>
  );
};

export default Slide;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  z-index: 5;
  position: fixed;
  top: 70px;
  width: 390px;
  height: 774px;

  overflow: auto;
`;

const Container = styled.div`
  width: 390px;
  height: 774px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2fd;

  animation: ${slideInAnimation} 0.3s ease-in forwards;
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
  cursor: pointer;

  background-color: ${(props) =>
    props.selected ? '#FFF' : 'rgba(227, 227, 249, 0.81)'};
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
    cursor: pointer;
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
  }
`;
