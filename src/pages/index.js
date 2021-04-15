import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import ColorBlock from "../components/colorblock/colorblock";
import ColorBanner from "../components/color_banner/colorBanner";
import HpHero from "../components/hero/homepage-hero/hpHero";
import ImageInfoSection from "../components/image_info_section/imageInfoSection";
import Layout from "../components/layout";
import MapChart from "../components/map/mapChart";
import MissionStatement from "../components/mission/missionStatement";
import NetworkLogos from "../components/network_logos/networkLogos";
import News from "../components/news/news";
import SEO from "../components/seo";
import { PRIMARY_GREY } from "../components/styles/styles";
import Testimonial from "../components/testimonial/testimonial";
import { HOMEPAGE_ID } from "../constants/constants";
import apiService from "../service/apiService";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const HomePage = () => {
  const [pageContent, setPageContent] = useState([]);

  useEffect(() => {
    apiService
      .getEntryByContentType(HOMEPAGE_ID)
      .then((response) => setPageContent(response[0].fields));
  }, []);

  const missionContent = pageContent.missionStatementImage
    ? {
        statement: pageContent.missionStatement,
        richDescription: pageContent.richMissionStatement,
        imageSrc: pageContent.missionStatementImage.fields,
      }
    : null;
  const heroContent = pageContent.heroImage
    ? {
        heading: pageContent.heroHeading,
        imageSrc: pageContent.heroImage.fields,
      }
    : null;
  const colorBlockContent = pageContent.more ? pageContent.more.fields : null;
  const newsContent =
    pageContent.articles && pageContent.articles.length !== 0
      ? {
          heading: pageContent.newsHeading,
          articles: pageContent.articles,
        }
      : null;

  const testimonialContent = pageContent.testimonial
    ? pageContent.testimonial.fields
    : null;
  const researchContent =
    pageContent.research && pageContent.research.fields.images.length > 0
      ? pageContent.research.fields
      : null;
  const mapContent = pageContent.svgMap ? pageContent.svgMap : null;
  const networkContent = pageContent.network
    ? pageContent.network.fields
    : null;
  const networkLogos = pageContent.networkLogos
    ? pageContent.networkLogos.fields.file.url
    : null;

  return (
    <Layout>
      <SEO title="Home" />
      {heroContent && <HpHero content={heroContent} />}
      {missionContent && <MissionStatement content={missionContent} />}
      {colorBlockContent && (
        <ColorBlock content={colorBlockContent} color={PRIMARY_GREY} />
      )}
      {researchContent && (
        <ImageInfoSection
          id={pageContent.research.sys.id}
          section="Research"
          content={researchContent}
          variant={false}
        />
      )}
      {testimonialContent && <Testimonial content={testimonialContent} />}
      {newsContent && <News content={newsContent} />}
      {networkContent && (
        <ColorBanner
          section="Network"
          content={networkContent}
          splitColumns
          wide
        />
      )}
      {mapContent && <ReactTooltip />}
      {mapContent && <MapChart markers={mapContent} />}
      {networkLogos && <NetworkLogos src={networkLogos} />}
    </Layout>
  );
};

export default HomePage;
