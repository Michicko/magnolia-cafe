import Header from "../components/Header";
import Menu from "../components/Menu";
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
        <Menu />
        <Socials />
      </main>
    </>
  );
};

export default Home;
