import styled from "styled-components";

export default function SquareButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}

const Button = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 12px;
  border-radius: 10px;
  transition: background-color 0.3s;
  background-color: transparent;
  color: ${({ theme }) => theme.color};

  &:hover {
    background-color: ${({ theme }) => theme.bgColor};
  }
`;
