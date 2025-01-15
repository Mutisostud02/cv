import Header from "./components/header"
import MainTags from "./components/mainTag"
import Aside from "./components/aside"
import PersonalDetailsForm from "./components/personalDetailsForm"
import EducationForm from "./components/educationForm"
import WorkExpForm from "./components/workExperienceForm"
function App() {

  return (
    <>
     <Header/>
     <div className="content-box">
      <Aside>
        <PersonalDetailsForm/>
        <EducationForm/>
        <WorkExpForm/>
      </Aside>
      <MainTags/>
    </div>
       
    </>
  )
}

export default App
