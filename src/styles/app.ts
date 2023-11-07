import styled from "styled-components";
import { BiSearchAlt2 } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  padding: 16px;
  background-image: linear-gradient(180deg, #484bff 0%, #1b016d 100%);
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 15px;
  margin-right: 10px;
  box-sizing: border-box;

  font-size: 20px;
  font-weight: 400;
  background-color: white;

  border: none;
  border-radius: 30px;
  outline: none;
`;
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const IconSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 40px;
  cursor: pointer;
`;

export const WeatherIconContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  img {
    max-width: 200px;
    max-height: 200px;
  }
`;
export const WeatherContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;

  p {
    margin: 0;
    color: #fff;
    font-size: 50px;
    font-weight: 600;
  }

  span {
    color: #fff;
    font-size: 25px;
    font-weight: 500;
  }
`;
export const WeatherData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin-top: 25px;
  padding: 0 10px ;


  color: #fff;
`;
export const WeatherDataSection = styled.div`
  display: flex;
`;
export const WeatherDataIcon = styled.div`
  display: flex;
  font-size: 25px;
  margin-right: 10px;
`;

export const WeatherDataContent = styled.div`
  display: flex;
  flex-direction: column;

  span{
    font-size: 18px;
    font-weight: 500;
  }
`;
