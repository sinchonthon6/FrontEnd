export const REDIRECT_URI = "http://localhost:3000/";
export const KAKAO_TOKEN_URI = "https://kauth.kakao.com/oauth/token";
export const KAKAO_USER_URI = "https://kapi.kakao.com/v2/user/me";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
