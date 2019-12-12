import HeaderText from '../styles/HeaderText'
import React from 'react';
import styled from 'styled-components';

const Home = () => (
  <>
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Arimo"></link>
  <HeaderText> Department Store 2.0</HeaderText>
  <hr />
  <br />
  <P>
  <p> Finally, a department store where you don't have to open inspect in Google Chrome to change the displayed price of what you want to something much cheaper, only to stare at it knowing you still can't afford it. Click on the navbar links to explore.</p>
  </P>
  </>
)

const P = styled.div`
  font-size: 18px;
`;


export default Home;