import React, { useEffect, useState } from "react";
import ColorBanner from "../components/color_banner/colorBanner";
import WhoWeAreHero from "../components/hero/whoWeAre/WhoWeAreHero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Team from "../components/team/team";
import Timeline from "../components/timeline/timeline";
import { WHOWEARE_ID } from "../constants/constants";
import apiService from "../service/apiService";

const WhoWeAre = () => {
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    apiService
      .getEntryByContentType(WHOWEARE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const {
    hero,
    teamSectionHeading,
    staff,
    affiliatedFaculty,
    timelineDescription,
    timeline,
    timelineImage,
  } = pageContent;

  return (
    <Layout>
      <SEO title="Who We Are" />
      {hero && <WhoWeAreHero content={hero.fields} />}
      {teamSectionHeading && staff && (
        <Team
          heading={teamSectionHeading}
          members={staff}
          affiliatedFaculty={affiliatedFaculty}
        />
      )}
      {timelineDescription && (
        <ColorBanner
          section="Timeline"
          content={timelineDescription.fields}
          left
        />
      )}
      {timeline && timelineImage && (
        <Timeline moments={timeline} image={timelineImage.fields.file.url} />
      )}
    </Layout>
  );
};

export default WhoWeAre;
