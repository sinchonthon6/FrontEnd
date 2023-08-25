import React, { useEffect } from "react";
import { KAKAO_TOKEN_URI, REDIRECT_URI } from "../utils/Oauth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const getToken = async (code) => {
    const data = {
      grant_type: "authorization_code",
      client_id: process.env.REACT_APP_API_KEY,
      redirect_uri: REDIRECT_URI,
      code,
    };

    const headers = {
      "Content-type": "application/x-www-form-urlencoded",
    };

    const res = await axios.post(KAKAO_TOKEN_URI, data, { headers });

    return res;
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code);
    getToken(code)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", JSON.stringify(res.data.access_token));
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return <div></div>;
};

export default Auth;
