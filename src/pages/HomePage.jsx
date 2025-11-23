import React from "react";
import PageContainer from "../components/PageContainer.jsx";
import Header from "../components/Header.jsx";
import PrereqSection from "../components/PrereqSection.jsx";
import JavaBasicsSection from "../components/JavaBasicsSection.jsx";
import DocsTable from "../components/DocsTable.jsx";
import SeleniumSection from "../components/SeleniumSection.jsx";

export default function HomePage({ isMobile }) {
  return (
    <PageContainer isMobile={isMobile}>
      <Header isMobile={isMobile} />
      <PrereqSection isMobile={isMobile} />
      <JavaBasicsSection isMobile={isMobile} />
      <DocsTable isMobile={isMobile} />
      <SeleniumSection isMobile={isMobile} />
    </PageContainer>
  );
}
