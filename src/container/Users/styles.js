import styled from "styled-components";
import Background from "../../assets/background2.svg";



export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;

  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 20px;
`;


export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
