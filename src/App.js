import './App.css';
import Interest from "./component/interests"
import Skills from "./component/skills"
import Education from "./component/education"
import Experience from './component/experience';
import Print from './component/print';

function App() {
  return (
    <>
      <Print></Print>
      <div>
          <div className='Printable'><h1 className='heading'>RESUME</h1></div>
          <Interest></Interest>
          <Skills></Skills>
          <Education></Education>
          <Experience></Experience>
      </div>
    </>
  );
}

export default App;
