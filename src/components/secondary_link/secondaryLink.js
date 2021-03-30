import React from "react";
import {
  ExternalLink,
  HighlightHover,
  InternalLink,
  LinkContainer,
  SecondaryLinkText,
} from "./styled";

const SecondaryLink = ({ content }) => {
  const isExternal = content.url ? content.url.includes("http") : null;
  const text = content.label ? content.label : "Click here";
  return (
    <LinkContainer>
      <HighlightHover>
        {isExternal ? (
          <ExternalLink target="_blank" href={content.url}>
            <SecondaryLinkText>{text} &#62;</SecondaryLinkText>
          </ExternalLink>
        ) : (
          <InternalLink to={content.url}>
            <SecondaryLinkText>{text} &#62;</SecondaryLinkText>
          </InternalLink>
        )}
      </HighlightHover>
    </LinkContainer>
  );
};

export default SecondaryLink;
