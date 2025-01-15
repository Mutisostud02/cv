import Input from "./input"
import { Textarea } from "./input"
import Button from "./button"
import { useState } from "react"

export default function WorkExpForm() {
     const [showForm, setShowForm] = useState(true)
     const [workName, setWorkName] = useState('');
     const [jobTitle, setJobTitle] = useState('');
     const [responsibilities, setResponsibilities] = useState([]);

     //state to take multiple objects containing different workexperiences
     const [history, setHistory] = useState([])
    
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false)
            setHistory([...history, {
                ["Work Name"]: workName,
                ["Job Title"]: jobTitle,
                Responsibilities: responsibilities,
                
            }])
            
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
            setWorkName('');
            setJobTitle('')
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
            <Textarea onChange={(e) => setResponsibilities(e.target.value.split('\n'))} label="Responsibilities" value={responsibilities.join('\n')}/>
            <div className="btns">
            <Button onClick={handleClick} label ="Save"/>
            {history.length > 0 && <Button onClick={handleBack} label="back"/>}            
            </div>
        </form>
        <section style={{
        
            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',          
            }}>
                <h2>WORK EXPERIENCE</h2>
                {history.map((item, index) => (
                    <div key={index}>
                    {index < 1 && <hr/>}
                    <p>Work Name: {item["Work Name"]}</p>
                    <p>Job Title: {item["Job Title"]}</p>
                    <h4 style={{fontSize:'1.2rem'}}>Responsibilities: </h4>
                    {item.Responsibilities.map((itm, ind) => (
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