import bannerImg from "./assets/banner.jpg";
import myselfImg from "./assets/me2.jpg";
import "./App.css";
import {
  Smartphone,
  Globe,
  BriefcaseBusiness,
  Linkedin,
  Github,
  Sparkles,
  SwatchBook,
  ListChecks,
  Gauge,
  TreePine,
  Search,
  Eye,
} from "lucide-react";

import Promise from "./promises/Promise";

import pdfFile from "./assets/EnesKalemci_FrontEndDeveloper_CV.pdf";
import ShowcaseImages from "./showcase/ShowcaseImages";

function App() {
  return (
    <div>
      <div className="bannerContainer flex-center">
        <img src={bannerImg} className="bannerImage" alt="" />
        <div className="bannerOverlay"></div>

        <div className="bannerContent flex-center">
          <img src={myselfImg} className="profilePhoto" alt="" />
          <span style={{ marginTop: 12 }}>Front-End Developer</span>
          <div className="horizontalDivider"></div>
          <h1 className="title">Enes Kalemci</h1>
          <div className="heroChips flex-center">
            <div className="heroChip flex-center">
              <BriefcaseBusiness size={16} /> B2B Contractor
            </div>
            <div className="heroChip flex-center">
              <Globe size={16} /> React
            </div>
            <div className="heroChip flex-center">
              <Smartphone size={16} /> React Native
            </div>
          </div>
        </div>
        <div className="noSectionWrapper flex-center">
          <div className="noSection flex-center">
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
          <div className="infoItem flex-center">
            <h3>$25</h3>
            <p>
              Hourly <span>(Gross)</span>
            </p>
          </div>
          <div className="infoItem flex-center">
            <h3>8 Years</h3>
            <p>Total Experience</p>
          </div>
          <div className="infoItem flex-center">
            <h3>4 Years</h3>
            <p>Commercial Exp.</p>
          </div>
          <div className="infoItem flex-center">
            <h3>GMT+3</h3>
            <p>Flexible Overlap</p>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1440, margin: "auto" }}>
        <div className="container">
          <div className="promisesWrapper">
            <Promise icon={Sparkles} title="Micro-Interactions & Motion Design">
              Smooth, engaging UI animations that make the experience feel
              alive.
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
              Fast-loading interfaces with efficient rendering and small
              bundles.
            </Promise>

            <Promise icon={TreePine} title="Vanilla-First Approach">
              Minimal dependencies—cleaner, lighter, and easier to maintain.
            </Promise>

            <Promise icon={Search} title="SEO-Friendly Foundation">
              Semantic HTML and structured data for better visibility and
              ranking.
            </Promise>

            <Promise icon={Eye} title="UX Science & Accessibility">
              UX patterns and WCAG practices for intuitive, inclusive
              experiences.
            </Promise>
          </div>
        </div>
        <div className="" style={{ paddingTop: 0, display: "flex", gap: 0 }}>
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
        </div>

        <div className="showCaseTitleSmall">
          <p>E-Commerce</p>
          <p>Js solutions</p>
          <p>Tools</p>
          <p>Saas</p>
          <p>Pos</p>
        </div>
        
        <ShowcaseImages />

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
            <a
              href={pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 400 }}
            >
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
    </div>
  );
}

export default App;
