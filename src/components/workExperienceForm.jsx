import Input from "./input"
import { Textarea } from "./input"
import Button from "./button"
import { useEffect, useState } from "react"

export default function WorkExpForm({
    companyName,
    workJobTitle,
    yearsWorkedPeriod,
    workResponsibilities,
    onUpdate,
    work

}) {
     const [showForm, setShowForm] = useState(true)
     const [workName, setWorkName] = useState(companyName);
     const [jobTitle, setJobTitle] = useState(workJobTitle);
     const [yearsWorked, setYearsWorked] = useState(yearsWorkedPeriod)
     const [responsibilities, setResponsibilities] = useState(workResponsibilities || []);

        useEffect(() => {
            setWorkName(companyName)
            setJobTitle(workJobTitle)
            setYearsWorked(yearsWorkedPeriod)
            setResponsibilities(workResponsibilities || [])
        }, [companyName, workJobTitle, yearsWorkedPeriod, workResponsibilities])

        const updatedDetails = {
            companyName: workName,
            workJobTitle: jobTitle,
            yearsWorkedPeriod: yearsWorked,
            workResponsibilities: responsibilities
        }
        

        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false)
            onUpdate(updatedDetails)            
        }
        function handleEdit(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(true)
        }
        function handleAdd(e) {
            e.preventDefault()
            e.stopPropagation()
            setShowForm(true)
            setWorkName('')
            setJobTitle('')
            setYearsWorked('')
            setResponsibilities([])          
        }
        function handleBack(e) {
            e.preventDefault()            
            e.stopPropagation()
            setShowForm(false)
        }
    return (
        <>
        <form style={{
            display: showForm ? 'block' : 'none',
        }}>
            <h2>WORK EXPERIENCE</h2>
            <Input onChange={(e) => setWorkName(e.target.value)} label="COMPANY NAME: " value={workName}/>
            <Input onChange={(e) => setJobTitle(e.target.value)} label="WORK TITLE: " value={jobTitle}/>
            <Input onChange={(e) => setYearsWorked(e.target.value)} value={yearsWorked} label="YEAR FROM/TO"  />            
            <Textarea onChange={(e) => setResponsibilities(e.target.value.split('\n'))} label="Responsibilities" value={responsibilities.join('\n')}/>
            <div className="btns">
            <Button onClick={handleClick} label ="Save"/>
            {work.length > 0 && <Button onClick={handleBack} label="back"/>}            
            </div>
        </form>
        
        <section style={{
        
            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',          
            }}>
                <h2>WORK EXPERIENCE</h2>
                {work.map((item, index) => (
                    <div key={index}>
                    {index < 1 && <hr/>}
                    <p>Work Name: {item.companyName}</p>
                    <p>Job Title: {item.jobWorkTitle}</p>
                    <p>Period From/To: {item.yearsWorkedPeriod}</p>
                    <h4 style={{fontSize:'1.2rem'}}>Responsibilities: </h4>
                    {item.workResponsibilities.map((itm, ind) => (
                        <div key={ind}>
                            <p>{itm}</p>                            
                        </div>
                    ))}
                    
                    {/* Onclick to be set on handleEdit function */}
                    <Button onClick={() => {}} label="edit"/>
                    <hr/>
                    </div>
                ))}
                <div className="btns">
                <Button onClick={handleAdd} label="add"/>
                </div>
        
        </section>
        </>
    )
}