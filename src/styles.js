import styled from "styled-components";
import Background from "./assets/backgroud1.svg"

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 20px;

`;
export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%, 
        rgba(255, 255, 255, 0.6) 0.8%, 
        rgba(255, 255, 255, 0.15) 0.84%
    );
    border-radius: 61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 70vh;
`;

export const H1 = styled.h1`
    font-weight: bold;
    font-style: normal;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin-bottom: 80px;

`;

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #eeeeee;
    margin-left: 25px;

`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    margin-bottom: 34px;
    border: none;
    padding-left: 25px;
    width: 342px;
    height: 58px;
    outline: none;
    color: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;


`;

export const Button = styled.button`
    width: 342px;
    height: 74px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: 0.8;
    }

    
    &:active {
        opacity: 0.5;
    }
`;

export const User = styled.li `
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
`
