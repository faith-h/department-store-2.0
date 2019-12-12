import React from 'react';
import HeaderText from '../styles/HeaderText'
import styled from 'styled-components';

const About = () => (
  <>
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Arimo"></link>
  <HeaderText>About</HeaderText>
  <hr />
  <br />
  <P>
  <p> This is a department store app written in React/Rails with React Router. It is purely for coding practice and learning. All items such as the Brand New Car are fake generated data and are <i>not</i> actually on sale for $9.99. Bummer.</p>
  </P>
  </>
)

const P = styled.div`
  font-size: 18px;
`;



export default About;