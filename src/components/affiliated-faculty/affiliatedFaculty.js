import React from "react";
import SecondaryLink from "../secondary_link/secondaryLink";
import { H3, P1 } from "../styles/styles";
import { Faculty, FacultyContainer } from "./styled";

const AffiliatedFaculty = ({ members }) => {
  return (
    <FacultyContainer>
      {members.map((f, i) => (
        <Faculty key={i}>
          <H3>{f.fields.name}</H3>
          <P1>{f.fields.jobTitle}</P1>
          <SecondaryLink
            content={{
              url: f.fields.profileUrl,
              label: "Link",
            }}
          />
        </Faculty>
      ))}
    </FacultyContainer>
  );
};

export default AffiliatedFaculty;
