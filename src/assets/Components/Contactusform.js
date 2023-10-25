import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormContainer = styled.div`
  max-width: 400px;
  margin-top: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 18px;
  margin-bottom: 16px;
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: 6px;
  width: 611px;
  height: 20px;
  background-color: inherit;
`;

const MInput = styled.input`

margin-bottom: 16px;
border: 1px solid rgba(0,0,0,0.25);
border-radius: 6px;
height: 203px;
width: 643px;
background-color: inherit;
text-align: ;
`;

const Submit = styled.input`
  border: none;
  border-radius: 10px;
  width: 173.41px;
  height: 57px;
  background-color: rgba(232,184,16);
  font-weight:400;
  font-size: 16px;
  line-height:21.6px;
  margin-left: 475px;
`;

const TextArea = styled.textarea`

margin-bottom: 16px;
border: 1px solid rgba(0,0,0,0.25);
border-radius: 6px;
height: 203px;
width: 643px;
background-color: inherit;
text-align: ;
`;


const Contactusform = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gqsx8uk', 'template_p3txhxx', form.current, 'UrVU1_5DFAfQOkRxt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
        <FormContainer>
        <Form ref={form} onSubmit={sendEmail}>
      
        <Input type="email" name="user_email" placeholder='Enter your email' />
      <Input type="text" name="user_name" placeholder='Subject'  />
      <MInput name="message" placeholder='Message' />
      <Submit type="submit" value="Submit" />
    </Form>
    </FormContainer>
    </div>
  )
}

export default Contactusform