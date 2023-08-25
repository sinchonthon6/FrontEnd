import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { KAKAO_USER_URI } from "../OAuth";

function Login() {
  const Redirect = "http://localhost:3000/auth";
  const [isLogin, setIsLogin] = useState(false);

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
    <div>
      {isLogin ? (
        <div>user.nickname</div>
      ) : (
        <a href={KaKao} style={{ color: "red" }}>
          hello
        </a>
      )}
    </div>
  );
}

export default Login;
