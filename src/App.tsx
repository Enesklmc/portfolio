import bannerImg from './assets/banner.jpg';
import myselfImg from './assets/me2.jpg';
import './App.css';
import {
  Smartphone,
  Globe,
  BriefcaseBusiness,
  Linkedin,
  Github,
  FileUser,
} from 'lucide-react';

function App() {
  return (
    <div>
      <div className='bannerContainer'>
        <img src={bannerImg} className='bannerImage' alt='' />
        <div className='bannerOverlay'></div>

        <div className='bannerContent'>
          <img src={myselfImg} className='profilePhoto' alt='' />
          <span style={{ marginTop: 12 }}>Front-End Developer</span>
          <div className='horizontalDivider'></div>
          <h1 className='title'>Enes Kalemci</h1>
          <div className='heroChips'>
            <div className='heroChip'>
              <BriefcaseBusiness size={16} /> B2B Contractor
            </div>
            <div className='heroChip'>
              <Globe size={16} /> React
            </div>
            <div className='heroChip'>
              <Smartphone size={16} /> React Native
            </div>
          </div>
        </div>
        <div className='noSectionWrapper'>
          <div className='noSection'>
            No Office <div className='verticalDivider' />
            No Visa <div className='verticalDivider' />
            No Meals <div className='verticalDivider' />
            No Insurance <div className='verticalDivider' />
            No Equipment
            <div className='verticalDivider' />
            No Vacation
          </div>
        </div>
      </div>

      <div className='infoBar'>
        <div className='infoGrid'>
          <div className='infoItem'>
            <h3>$30</h3>
            <p>
              Hourly <span>(Gross)</span>
            </p>
          </div>
          <div className='infoItem'>
            <h3>8 Years</h3>
            <p>Total Experience</p>
          </div>
          <div className='infoItem'>
            <h3>4 Years</h3>
            <p>Commercial Exp.</p>
          </div>
          <div className='infoItem'>
            <h3>GMT+3</h3>
            <p>Flexible Overlap</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='showCase'>
          <div className='showCaseTitle'>Showcase Title</div>
        </div>
      </div>
      <div className='buttomNavbar'>
        <div>
          <Github size={16} />
        </div>
        <div>
          Cv <FileUser size={16} />
        </div>
        <div>
          <Linkedin size={16} />
        </div>
      </div>
    </div>
  );
}

export default App;
