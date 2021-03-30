import { navigate } from "gatsby";
import React from "react";
import Green from "../../images/sprinkles/outlined-green-large.svg";
import Navy from "../../images/sprinkles/outlined-navy-large.svg";
import Yellow from "../../images/sprinkles/outlined-yellow-large.svg";
import AffiliatedFaculty from "../affiliated-faculty/AffiliatedFaculty";
import StaffMember from "../staff/staffMember";
import { H1, H2, P2 } from "../styles/styles";
import { ButtonContainer, Container, CTA } from "./styled";

const Team = ({ heading, members, affiliatedFaculty }) => {
  const colors = [Navy, Green, Yellow];

  return (
    <Container>
      <H2>Our Team</H2>
      <H1>{heading}</H1>
      {members.map((member, i) => (
        <StaffMember
          key={member.sys.id}
          content={member.fields}
          color={colors[i % 3]}
        />
      ))}

      {affiliatedFaculty && (
        <>
          <H1>Additional Faculty</H1>
          <AffiliatedFaculty members={affiliatedFaculty} />
        </>
      )}

      <ButtonContainer>
        <CTA onClick={() => navigate("/contact")}>
          <P2>Contact Us</P2>
        </CTA>
      </ButtonContainer>
    </Container>
  );
};
export default Team;
