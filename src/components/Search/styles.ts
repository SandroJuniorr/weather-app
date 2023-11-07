import styled from "styled-components";


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