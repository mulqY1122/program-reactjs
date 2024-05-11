import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection, tutorsList } from "../data/TutorsSection";
import { partnersSection } from "../data/PartnersSection";
import { partnerList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";

import Partners from "../components/Partners";
import Tutors from "../components/Tutors";
import Contact from "../components/Contact";
import parse from "html-react-parser";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section
          id="home"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <img
            src={homeSection.Image}
            style={{ width: "60%", borderRadius: "10px" }}
          />
          <div className="kolom" style={{ marginLeft: "20px" }}>
            {parse(homeSection.content)}
          </div>
        </section>
        {/* online course */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.content)}</div>
          <img src={coursesSection.Image} />
        </section>
        {/* untuk tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>
        {/* partner section */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partners partnerList={partnerList} />
          </div>
        </section>
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;
