import Header from "../components/Header";
import MenuSection from "../components/MenuSection";
import SeasonTreats from "../components/SeasonTreats";
import SectionBreakfast from "../components/SectionBreakfast";
import Socials from "../components/Socials";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <SeasonTreats />
        <SectionBreakfast />
        <MenuSection />
        <Socials />
      </main>
    </>
  );
};

export default Home;
