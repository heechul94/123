import React from "react";
import styled from "styled-components";

const CustomHeader = styled.header`
  margin: 2rem;
  padding: 3rem;
  background-image: url("https://i.namu.wiki/i/ypzpnvGW7YnaStiAZq19-hWcVs8SxBGQ_tf7doy4s5LxJn3ZSz4zh-vM7pD0XNn1ICpzuLJmGg3NtVSJfnWKb72souojcY0WttstNTGxTXthOhzEto-AzufKvcLEGFjahyeQti31V8Kz7J12WhjaSw.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Header = () => {
  return <CustomHeader></CustomHeader>;
};
export default Header;
