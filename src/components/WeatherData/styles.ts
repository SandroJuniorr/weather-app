import styled from "styled-components";

export const WeatherDataContainer = styled.div`
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
