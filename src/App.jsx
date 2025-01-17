import Header from "./components/header"
import PersonalDetailsForm from "./components/personalDetailsForm"
import EducationForm from "./components/educationForm"
import WorkExpForm from "./components/workExperienceForm"
import MainForm from "./components/main.Form"


function App() {

  return (
    <>
     <Header/>
     <div className="display">
     <MainForm/>   
     </div>    
    </>
  )
}

export default App
