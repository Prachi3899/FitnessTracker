import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from './Button';

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;

const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const Signin = () => {
  return (
    <Container>
      <div>
        <Title>Welcome To Fittrack</Title>
        <Span>Please login with your details here</Span>
      </div>
      <div style={{display: "flex", gap: "20px", flexDirection: "column"}}>
        <TextInput label="Email" placeholder="Enter Your Email"/>
        <TextInput label="Password" placeholder="Enter Your Password" password/>
        <Button text="Sign In" /> 
      </div>
    </Container>
  )
}

export default Signin