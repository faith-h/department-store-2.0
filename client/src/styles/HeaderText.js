import styled from 'styled-components';

const fontSize = (size) => {
  switch(size) {
    case "large":
    return "40px";
    case "small":
    return "25px";
    default:
      return "20px";
  };
};

const HeaderText = styled.h1`
  font-family: 'Arimo', serif;
  background: black;
  color: white;
  align-items: center;
  text-align: center;
  padding: 40px;
  border-style: solid;
  border-radius: 5px;
`;

export default HeaderText;