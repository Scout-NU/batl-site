import React from "react";
import { H2, RichText } from "../styles/styles";
import { Bio, Container, Group, Headshot, Image, Sprinkle } from "./styled";

const StaffMember = ({ content, color }) => {
  return (
    <Container>
      <Group>
        <Headshot>
          <Image
            src={content.headshot.fields.file.url}
            alt={content.headshot.fields.description}
          />
          <Sprinkle src={color} />
        </Headshot>
        <H2>{content.name}</H2>
        {content.title && content.title !== "" && <H2>{content.title}</H2>}
      </Group>
      <Bio>
        <RichText document={content.richBiography} />
      </Bio>
    </Container>
  );
};

export default StaffMember;
