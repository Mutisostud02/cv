import PersonalDetailsForm from "./personalDetailsForm";
import EducationForm from "./educationForm";
import WorkExpForm from "./workExperienceForm";

import { useState } from "react";

let myStyles= {
    color:"black",
    textAlign:"center"
}

export default function MainForm() {
    const [personal, setPersonal] = useState({
        fullName: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "0734323444"
    })
    const [education, setEducation] = useState([{
        schoolName: 'Example University',
        levelStudiedFor: "Bachelor's in Software Engineering",
        durationPeriod: '2014-2018'
    }])
    const [work, setWork] = useState([{
        companyName: 'XYZ Solutions',
        workJobTitle: 'Junior Developer',
        yearsWorkedPeriod: '2018 - 2020',
        workResponsibilities: [
            'Assisting in software development tasks',
            'Collaborating with team members on projects',
            'Debugging and testing code'
        ],
    }])
    function handlePersonalDetailsChange(updateDetails) {
        setPersonal(updateDetails)
    }
    
    function handleEducationChange(updateDetails) {
        setEducation([...education, updateDetails])
    }
    function handleWorkInputChange(updateDetails) {
        setWork([...work, updateDetails])
    }

    return (
        <>
        <div className="formInp">
    <PersonalDetailsForm 
    fullName={personal.fullName}
    email={personal.email}
    phoneNumber={personal.phoneNumber}
    onUpdate={handlePersonalDetailsChange}
    />
    <EducationForm
    schoolName={education[0].schoolName}
    levelStudiedFor={education[0].levelStudiedFor}
    durationPeriod={education[0].durationPeriod}
    onUpdate={handleEducationChange}
    education={education}
    />
    <WorkExpForm
    companyName={work[0].companyName}
    workJobTitle={work[0].workJobTitle}
    yearsWorkedPeriod={work[0].yearsWorkedPeriod}
    workResponsibilities={work[0].workResponsibilities}
    onUpdate={handleWorkInputChange}
    work={work}
    />
    </div>
    
    <div className="formOut" >
        <h3 style={{marginTop:0,
            textAlign:"center"
        }}>CURRICULUM VITAE</h3>
        <div className="personal">
            <p style={myStyles}>{personal.fullName}</p>
            <p style={myStyles}>{personal.email}</p>
            <p style={myStyles}>{personal.phoneNumber}</p>
            <hr/>
        </div>
        <h3 style={{...myStyles, marginTop:'1rem'}}>EDUCATION HISTORY</h3>

        <div className="education" style={{
                display:"grid",
                gridTemplateColumns:"repeat(3, 1fr)"
            }}>
            
            {education.map((item, index) => 
            <div key={index} style={
                {
                    lineHeight:2
                }
            }>
                
            <p style={myStyles}>{item.schoolName}</p>                            
            <p style={myStyles}>{item.levelStudiedFor}</p>                            
            <p style={myStyles}>{item.durationPeriod}</p>                            
            </div>)}
            <hr/>       
            
        </div>
        <hr/>
        <h3 style={{...myStyles, marginTop:'1rem'}}>WORK EXPERIENCE</h3>

        <div className="work" style={{
                display:"grid",
                gridTemplateColumns:"repeat(3, 1fr)"
            }}>
                {work.map((item, index) => 
            <div key={index} style={
                {
                    lineHeight:2
                }
            }>
                
            <p style={{...myStyles, fontWeight:'bold'}}>{item.companyName}</p>                            
            <p style={myStyles}>{item.workJobTitle}</p>                            
            <p style={myStyles}>{item.yearsWorkedPeriod}</p>                            
            <h4 style={{color:'black', textAlign:'center'}}>Responsibilities: </h4>
                {item.workResponsibilities.map((i,x) => <li  style={{...myStyles, color:"black"}} key={x}>{i}</li>)} 
            </div>)}
            
            
        </div>
        
    </div>
    </>
    
    )
}