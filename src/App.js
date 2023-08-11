import './App.css';
import Interest from "./component/interests"
import Skills from "./component/skills"
import Education from "./component/education"

let edudat={
  college:"BR. Ambedkar National Institute of Technology, Jalandhar",
  year:"2021-2025",
  cgpa:"9.0",
  id:1,
};

function App() {
  return (
    <>
      <div>
        <h1>RESUME</h1>
        <Interest></Interest>
        <hr/>
        <Skills></Skills>
        <hr/>
        <h3>EDUCATION</h3>
        <Education
          key={edudat.id}
          college={edudat.college}
          year={edudat.year}
          cgpa={edudat.cgpa}
        ></Education>
        <hr/>
        
      </div>
    </>
  );
}

export default App;
