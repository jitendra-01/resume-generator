import './App.css';
import Interest from "./component/interests"
import Skills from "./component/skills"
import Education from "./component/education"
import Experience from './component/experience';
import Print from './component/print';
import Editeducation from './component/editeducation';
import Addskills from './component/addSkills';
import edudat from './component/data/edudat';
import { useState } from 'react';
import skills from './component/data/skilldat';
import exps from './component/data/exps';
import Addexperience from './component/addexperience';
import Addinterests from './component/addinterests';
import interest from './component/data/interest';
import Theme from './component/context/themecontext';

function App() {

  const [educationdata, seteducationdata] = useState(edudat);
  const [totalskill, setskills] = useState(skills);
  const [experiences, setexperiences] = useState(exps);
  const [interests, setinterests] = useState(interest)
  const [mode, setMode] = useState('darkMode');

  function Update(edudata) {
    seteducationdata(edudata);
  }

  function AddSkills(skill) {
    setskills([
      ...totalskill,
      skill
    ])
  }

  function AddExperience(experience) {
    setexperiences([
      ...experiences,
      experience
    ])
  }

  function AddInterests(Interests) {
    setinterests([
      ...interests,
      Interests
    ])
  }

  return (
    <Theme.Provider value={mode}>
      <div className={`App ${mode}`}>
        <button onClick={() =>
          setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')
        }>{mode === 'darkMode' ? 'lightMode' : 'darkMode'}</button><br></br>
        <Print></Print>
        <Editeducation Update={Update} ></Editeducation>
        <Addskills AddSkills={AddSkills}></Addskills>
        <Addexperience AddExperience={AddExperience}></Addexperience>
        <Addinterests AddInterests={AddInterests}></Addinterests>
        <div>
          <div className='Printable'><h1 className='heading'>RESUME</h1></div>
          <Education edudat={educationdata}></Education>
          <Interest interest={interests}></Interest>
          <Skills skills={totalskill}></Skills>
          <Experience exps={experiences}></Experience>
        </div>
      </div >
    </Theme.Provider>
  );
}

export default App;
