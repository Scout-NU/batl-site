import React, { useState } from "react";
import { H2Body, P2, SmallText } from "../styles/styles";
import {
  Checkbox,
  CheckboxLabel,
  CheckboxWrapper,
  Form,
  FormContainer,
  InlineInput,
  InlineInputWrapper,
  InputWrapper,
  Label,
  SendButton,
  StyledInput,
  StyledTextarea,
  Terms,
} from "./styled";

const ContactForm = ({ content }) => {
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showTerms, setShowTerms] = useState(false);

  const updateSubjects = (value, id) => {
    if (value) {
      if (!selectedSubjects.includes(id)) {
        setSelectedSubjects([...selectedSubjects, id]);
      }
    } else {
      if (selectedSubjects.includes(id)) {
        const newSubjects = selectedSubjects.filter(
          (subject) => subject !== id
        );
        setSelectedSubjects(newSubjects);
      }
    }
  };

  const toggleTerms = () => {
    if (showTerms) {
      setShowTerms(false);
    } else {
      setShowTerms(true);
    }
  };

  return (
    <FormContainer>
      <Form>
        <InlineInputWrapper>
          <InlineInput left="true">
            <Label htmlFor="firstName">First name</Label>
            <StyledInput
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </InlineInput>
          <InlineInput left="false">
            <Label htmlFor="lastName">Last name</Label>
            <StyledInput
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </InlineInput>
        </InlineInputWrapper>
        <InputWrapper>
          <Label htmlFor="email">Your email</Label>
          <StyledInput
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </InputWrapper>
        <Label>Inquiry subject</Label>
        <InputWrapper>
          {content.subjectOptions &&
            content.subjectOptions.map((subject, i) => {
              return (
                <CheckboxWrapper key={i}>
                  <Checkbox
                    type="checkbox"
                    value=""
                    name={`${subject}-${i}`}
                    id={`${subject}-${i}`}
                    onChange={(event) =>
                      updateSubjects(event.target.checked, event.target.id)
                    }
                  />
                  <CheckboxLabel htmlFor={`${subject}-${i}`}>
                    <H2Body className="m-0">{subject}</H2Body>
                  </CheckboxLabel>
                </CheckboxWrapper>
              );
            })}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="message">Your message</Label>
          <StyledTextarea
            id="message"
            rows="6"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></StyledTextarea>
          {showTerms && (
            <div>
              <SmallText>{content.terms}</SmallText>
            </div>
          )}
          <Terms onClick={() => toggleTerms()}>terms</Terms>
        </InputWrapper>
        <SendButton
          onClick={() =>
            (window.location.href = `mailto:${
              content.email
            }?subject=Inquiring About ${selectedSubjects.join(
              ", "
            )} &body=${message} %0D%0A %0D%0A From, %0D%0A %0D%0A ${firstName} ${lastName} %0D%0A %0D%0A email: ${email}`)
          }
        >
          <P2>SEND MESSAGE</P2>
        </SendButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
