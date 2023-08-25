import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { KAKAO_AUTH_URL, KAKAO_USER_URI } from "../OAuth";
import { styled } from "styled-components";
import login from "../images/login.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const Redirect = "http://localhost:3000/auth";
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({ nickname: undefined, image: undefined });
  const REACT_APP_API_KEY = "0359e71d1e648b5199a68866b3ccaa32";
  const KaKao = `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_API_KEY}&redirect_uri=${Redirect}&response_type=code`;
  const getUserData = async (token) => {
    const headers = {
      "Content-type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(KAKAO_USER_URI, { headers });
    return data;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      getUserData(token)
        .then((res) => {
          setUser({
            nickname: res.data.properties.nickname,
            image: res.data.properties.profile_image,
          });
          console.log(user);
          setIsLogin(true);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem("token");
        });
    }
  }, []);
  return (
    <LoginWrapper>
      {isLogin ? (
        <>
          <div className="hello">반가워요 인영님 :)</div>
          <div className="login">유니콘에 공연 정보를 등록해 홍보하세요!</div>
          <div className="button">
            <p
              onClick={() => {
                navigate("/Write");
              }}
            >
              공연 등록하러가기
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="hello">LOGIN</div>
          <div className="login">로그인 후 우리 동아리 공연을 홍보하세요!</div>
          <a href={KAKAO_AUTH_URL}>
            <img src={login} alt="카카오톡 로그인" onClick={() => {}} />
          </a>
        </>
      )}
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  /* Frame 5 */

  width: 390px;
  height: 774px;
  background: linear-gradient(
    206.48deg,
    rgba(167, 41, 227, 0.2) 9.21%,
    rgba(38, 35, 224, 0.18) 30.15%,
    rgba(229, 176, 96, 0.124854) 41.02%,
    rgba(94, 91, 225, 0.072) 60.11%
  );

  .hello {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding-top: 38px;
    margin-bottom: 20px;
  }
  .login {
    font-size: 14px;
    margin-top: 9px;
    text-align: center;
  }
  img {
    display: block;
    margin: 16px auto;
  }
  .button {
    border-radius: 20px;
    background-color: #ffffff;
    color: black;
    width: 250px;
    height: 39px;
    margin: 25px auto 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
  }
  .button p {
    font-size: 12px;
    cursor: pointer;
  }
`;

export default Login;
