import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import down from "../images/down.svg";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
function WritePost() {
  const { BASE_URL } = useAuth();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setSelectedImage(imageFile);
  };
  const navigate = useNavigate();
  const SubmitGoHome = async () => {
    navigate("/");
    await axios.post(`${BASE_URL}/event/`, {
      circle_name: 동아리,
      title: 제목,
      university: 학교,
      main_img: selectedImage,
    });
  };
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    제목: "",
    동아리: "",
    학교: "",
    카테고리: "",
    시작일: "",
    종료일: "",
    시작시간: "",
    소요시간: "",
    요금: "",
    공연장소: "",
    연락처: "",
    설명: "",
  });

  const {
    제목,
    동아리,
    학교,
    카테고리,
    시작일,
    종료일,
    시작시간,
    소요시간,
    요금,
    공연장소,
    연락처,
    설명,
  } = form;
  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setForm({
      ...form, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <WriteContainer>
      <h1>POST</h1>
      <InputForm>
        <input
          name="제목"
          value={제목}
          className="normal"
          placeholder="제목은 15자 이내로 작성"
          onChange={onChange}
        ></input>
        <input
          name="동아리"
          value={동아리}
          className="normal"
          placeholder="동아리명"
          onChange={onChange}
        ></input>
        <input
          name="학교"
          value={학교}
          className="normal"
          placeholder="학교명"
          onChange={onChange}
        ></input>
        <div className="dropdown">
          <input
            name="카테고리"
            value={카테고리}
            className="normal"
            placeholder="카테고리 선택"
            onChange={onChange}
          ></input>
          <img
            src={down}
            alt="드롭다운"
            onClick={() => {
              setVisible(!visible);
            }}
          />

          {visible ? (
            <ul className="hide-menu">
              <li
                onClick={() => {
                  setForm({ ...form, category: "서강대학교" });
                  const El = document.querySelector("input.normal");
                  console.log(El);
                  El.value = "서강대학교";
                  setVisible(!visible);
                }}
              >
                밴드
              </li>
              <li>댄스</li>
              <li>전시</li>
              <li>연극</li>
              <li>스포츠</li>
              <li>기타</li>
            </ul>
          ) : (
            ""
          )}
          <div className="hide-menu"></div>
        </div>

        <div className="flex">
          <input
            name="시작일"
            value={시작일}
            className="half"
            placeholder="시작일"
            onChange={onChange}
          />
          <p>~</p>
          <input
            name="종료일"
            value={종료일}
            className="half"
            placeholder="종료일"
            onChange={onChange}
          />
        </div>
        <input
          name="시작시간"
          value={시작시간}
          className="normal"
          placeholder="시작 시간(ex. 18:30)"
          onChange={onChange}
        ></input>
        <input
          name="소요시간"
          value={소요시간}
          className="normal"
          placeholder="소요 시간 (ex.90분)"
          onChange={onChange}
        ></input>
        <input
          name="요금"
          value={요금}
          onChange={onChange}
          className="normal"
          placeholder="요금(ex. 무료 / 9000원)"
        ></input>
        <input
          name="공연장소"
          value={공연장소}
          className="normal"
          placeholder="공연 장소 (상세 주소까지 입력)"
          onChange={onChange}
        ></input>
        <input
          name="연락처"
          value={연락처}
          className="normal"
          placeholder="연락처 (전화번호 or 인스타)"
          onChange={onChange}
        ></input>
        <textarea
          name="설명"
          value={설명}
          className="large"
          placeholder="상세설명 (자유롭게 홍보해주세요~)"
          onChange={onChange}
        ></textarea>
        <ImageSubmit>
          <p>공연을 나타내는 사진을 첨부해주세요.</p>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </ImageSubmit>
      </InputForm>

      <SubmitButton onClic k={SubmitGoHome}>
        완료
      </SubmitButton>
    </WriteContainer>
  );
}

const ImageSubmit = styled.div`
  input {
    display: block;
  }
  p {
    margin-top: 30px;
    text-align: left;
    width: 275px;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
  }
`;

const InputForm = styled.div`
  width: 352px;
  height: 870px;
  margin-top: 53px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding-top: 27px;
  .flex {
    width: 285px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .large {
    box-sizing: border-box;
    display: block;
    width: 285px;
    margin: 0 auto 12px;
    border-radius: 10px;
    background-color: #f3f3fd;
    height: 148px;
    padding-top: 10px;
    padding-left: 20px;
    border: none;
  }
  input.normal {
    box-sizing: border-box;
    display: block;
    width: 285px;
    margin: 0 auto 12px;
    border-radius: 10px;
    background-color: #f3f3fd;
    height: 33px;
    padding-left: 20px;
    border: none;
    position: relative;
  }
  .dropdown {
    position: relative;
  }
  .dropdown img {
    position: absolute;
    right: 48px;
    top: 4px;
    width: 24px;
  }
  input.half {
    box-sizing: border-box;
    display: block;
    width: 126px;

    border-radius: 10px;
    background-color: #f3f3fd;
    height: 33px;
    padding-left: 20px;
    border: none;
  }

  ul.hide-menu {
    position: absolute;
    top: 27px;
    left: 33px;
    z-index: 999;
    padding: 0px;
    width: 285px;
    border-radius: 0px 0px 20px 20px;
    background-color: #f3f3fd;
  }
  ul.hide-menu li {
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 3px;
    border-bottom: 1px solid rgba(231, 231, 243, 1);
    font-size: 12px;
  }
  ul.hide-menu li:first-child {
    padding-top: 10px;
  }
`;

const WriteContainer = styled.div`
  width: 390px;
  height: 1179px;
  background: linear-gradient(
    206.48deg,
    rgba(167, 41, 227, 0.2) 9.21%,
    rgba(38, 35, 224, 0.18) 30.15%,
    rgba(229, 176, 96, 0.124854) 41.02%,
    rgba(94, 91, 225, 0.072) 60.11%
  );
  h1 {
    padding-top: 53px;
    text-align: center;
    font-size: 24px;
  }
`;

const SubmitButton = styled.div`
  width: 352px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 19px auto;
  background-color: white;
  border-radius: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
export default WritePost;
