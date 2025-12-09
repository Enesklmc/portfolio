import bannerImg from "./assets/banner.jpg";
import myselfImg from "./assets/me2.jpg";
import "./App.css";
import {
  Smartphone,
  Globe,
  BriefcaseBusiness,
  Linkedin,
  Github,
  FileUser,
  Sparkles,
  SwatchBook,
  ListChecks,
  Gauge,
  TreePine,
  Search,
  Eye,
} from "lucide-react";
import ImageConfig from "./showcase/imageConfig/ImageConfig";
import Promise from "./promises/Promise";

import pdfFile from "./assets/EnesKalemci_FrontEndDeveloper_CV.pdf";

function App() {
  return (
    <div>
      <div className="bannerContainer">
        <img src={bannerImg} className="bannerImage" alt="" />
        <div className="bannerOverlay"></div>

        <div className="bannerContent">
          <img src={myselfImg} className="profilePhoto" alt="" />
          <span style={{ marginTop: 12 }}>Front-End Developer</span>
          <div className="horizontalDivider"></div>
          <h1 className="title">Enes Kalemci</h1>
          <div className="heroChips">
            <div className="heroChip">
              <BriefcaseBusiness size={16} /> B2B Contractor
            </div>
            <div className="heroChip">
              <Globe size={16} /> React
            </div>
            <div className="heroChip">
              <Smartphone size={16} /> React Native
            </div>
          </div>
        </div>
        <div className="noSectionWrapper">
          <div className="noSection">
            No Office <div className="verticalDivider" />
            No Visa <div className="verticalDivider" />
            No Meals <div className="verticalDivider" />
            No Insurance <div className="verticalDivider" />
            No Equipment
            <div className="verticalDivider" />
            No Vacation
          </div>
        </div>
      </div>

      <div className="infoBar">
        <div className="infoGrid">
          <div className="infoItem">
            <h3>$25</h3>
            <p>
              Hourly <span>(Gross)</span>
            </p>
          </div>
          <div className="infoItem">
            <h3>8 Years</h3>
            <p>Total Experience</p>
          </div>
          <div className="infoItem">
            <h3>4 Years</h3>
            <p>Commercial Exp.</p>
          </div>
          <div className="infoItem">
            <h3>GMT+3</h3>
            <p>Flexible Overlap</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="promisesWrapper">
          <Promise icon={Sparkles} title="Micro-Interactions & Motion Design">
            Smooth, engaging UI animations that make the experience feel alive.
          </Promise>

          <Promise icon={SwatchBook} title="Global Theming System">
            One change updates the entire color palette—fast and consistent
            theming.
          </Promise>

          <Promise icon={Smartphone} title="Fully Responsive Architecture">
            Looks and works great on every screen size, without awkward
            breakpoints.
          </Promise>

          <Promise icon={ListChecks} title="Clean & Maintainable Code">
            Simple, readable structures that stay easy to scale and refactor.
          </Promise>

          <Promise icon={Gauge} title="Performance Optimization">
            Fast-loading interfaces with efficient rendering and small bundles.
          </Promise>

          <Promise icon={TreePine} title="Vanilla-First Approach">
            Minimal dependencies—cleaner, lighter, and easier to maintain.
          </Promise>

          <Promise icon={Search} title="SEO-Friendly Foundation">
            Semantic HTML and structured data for better visibility and ranking.
          </Promise>

          <Promise icon={Eye} title="UX Science & Accessibility">
            UX patterns and WCAG practices for intuitive, inclusive experiences.
          </Promise>
          {/*

  <div className="promise">
            a<div className="dot left-corner-dot"></div>
          </div>
          <div className="promise promiseResponsive">
            <span>R</span>
            <span>E</span>
            <span>S</span>
            <span>P</span>
            <span>O</span>
            <span>N</span>
            <span>S</span>
            <span>I</span>
            <span>V</span>
            <span>E</span>
          </div>


  */}
        </div>
      </div>

      <div className="container" style={{ paddingTop: 0 }}>
        <div className="showCaseWrapper">
          <div className="showCase">
            <div className="showCaseTitle">E Commerce</div>
          </div>
          <div className="showCase">
            <div className="showCaseTitle">Pos</div>
          </div>
          <div className="showCase">
            <div className="showCaseTitle">Tools</div>
          </div>
          <div className="showCase">
            <div className="showCaseTitle">Showcase Title</div>
          </div>
        </div>
      </div>
      <div className="container contactContainer">
        <div>enesklmc@gmail.com</div>
        <div>
          <a
            href="https://www.linkedin.com/in/enes-kalemci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <a href={pdfFile} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </div>
      </div>
      <div className="buttomNavbar">
        <div>
          <a
            href="https://github.com/Enesklmc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
        </div>
        <div>
          <a href={pdfFile} target="_blank" rel="noopener noreferrer" style={{fontWeight:400}}>
            Cv
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/enes-kalemci/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
