import styled from 'styled-components';

export const OptionsContainer = styled.div`
  display: flex;

  justify-content: space-around;
`;

export const Button = styled.button`
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #3a853e;
  border: 1px solid #5ab05f;
  border-radius: 4px;
  background-color: #c1e6c3;
  &:hover {
    color: white;
    background-color: #5ab05f;
  }
`;
