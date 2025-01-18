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
            if(showForm) {
            setWorkName(companyName)
            setJobTitle(workJobTitle)
            setYearsWorked(yearsWorkedPeriod)
            setResponsibilities(workResponsibilities || [])
        }}, [companyName, workJobTitle, yearsWorkedPeriod, workResponsibilities, showForm])

        
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false)
            if (!workName || !jobTitle || !yearsWorked) {
                // Prevent saving if any value is empty
                alert("Please fill in all fields before saving.");
                return;
            }
            const updatedDetails = {
                companyName: workName,
                workJobTitle: jobTitle,
                yearsWorkedPeriod: yearsWorked,
                workResponsibilities: responsibilities,
                id: work[work.length - 1]?.id, // Ensure the id remains unchanged for new item
            };
            onUpdate([...work.slice(0, work.length - 1), updatedDetails]); // Update last item only
            onUpdate(updatedDetails)              
        }
        function handleEdit(e, item) {
            e.preventDefault();
            e.stopPropagation();
            setWorkName(item.companyName)
            setJobTitle(item.workJobTitle)
            setYearsWorked(item.yearsWorkedPeriod)
            setResponsibilities(item.workResponsibilities)
            setShowForm(true)

        }
        function handleAdd(e) {
            e.preventDefault()
            e.stopPropagation()
            const newItem = {
                companyName: "",
                workJobTitle: "",
                yearsWorkedPeriod: "",
                workResponsibilities: [],
                id: crypto.randomUUID(),
            }
            setWorkName("")
            setJobTitle("")
            setYearsWorked("")
            setResponsibilities([])
            setShowForm(true)
            onUpdate([...work, newItem])         
        }
        function handleBack(e) {
            e.preventDefault()            
            e.stopPropagation()
            setShowForm(false)
        }
        function handleDelete(e, item) {
            e.stopPropagation()
            e.preventDefault()
            onUpdate(work.filter(i => i.id !== item.id));
           
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
                    <div key={item.id}>
                    {index > 0 && <hr/>}
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
                    <Button onClick={(e) => {handleEdit(e, item)}} label="edit"/>
                    <Button onClick={(e) => {handleDelete(e, item)}} label="delete"/>
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