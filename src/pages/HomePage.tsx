import SectionWrapper from "@/components/common/SectionWrapper";
import HeroVideo from "@/components/home/HeroVideo";
import HomeInfo from "./../components/home/HomeInfo";
import SkillsViewer from "@/components/skill/SkillsViewer";

const HomePage = () => {
  return (
    <>
      <SectionWrapper>
        <HeroVideo />
        <HomeInfo />
      </SectionWrapper>

      <SectionWrapper>
        <SkillsViewer />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
