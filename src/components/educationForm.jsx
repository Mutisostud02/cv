import Input from "./input"
import Button from "./button"
import { useState, useEffect } from "react";

export default function EducationForm({
    schoolName,
    levelStudiedFor,
    durationPeriod,
    onUpdate,
    education,
}) {
    const [showForm, setShowForm] = useState(true)
    const [school, setSchool] = useState(schoolName);
    const [studied, setStudied] = useState(levelStudiedFor);
    const [duration, setDuration] = useState(durationPeriod);

   

    useEffect(() => {
        if (showForm) {
            setSchool(schoolName);
            setStudied(levelStudiedFor);
            setDuration(durationPeriod);
        }
    }, [schoolName, levelStudiedFor, durationPeriod, showForm]);
    


    
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false);
            if (!school || !studied || !duration) {
                // Prevent saving if any value is empty
                alert("Please fill in all fields before saving.");
                return;
            }
            const updatedDetails = {
                schoolName: school,
                levelStudiedFor: studied,
                durationPeriod: duration,
                id: education[education.length - 1]?.id, // Ensure the id remains unchanged for new item
            };
            onUpdate([...education.slice(0, education.length - 1), updatedDetails]); // Update last item only
            onUpdate(updatedDetails)            
        }
      
        //function to edit individual items in the education array
        function handleEdit(e,item) {
            e.preventDefault();
            e.stopPropagation();
            setSchool(item.schoolName)
            setStudied(item.levelStudiedFor)
            setDuration(item.durationPeriod)
            setShowForm(true)
        }
        function handleAdd(e) {
            e.preventDefault()
            e.stopPropagation()
            const newItem = {
                schoolName: "",
                levelStudiedFor: "",
                durationPeriod: "",
                id: crypto.randomUUID(),
            }

            setSchool("")
            setStudied("")
            setDuration("")
            setShowForm(true)
            onUpdate([...education, newItem])     
        }
        function handleBack(e) {
            e.preventDefault()            
            e.stopPropagation()
            setShowForm(false)
        }
        function handleDelete(e, item) {
            e.stopPropagation()
            e.preventDefault()
            onUpdate(education.filter(i => i.id !== item.id));
           
        }
    return (
        <>
        <form style={{
            display: showForm ? 'block' : 'none',
        }}>
            <h2>EDUCATION HISTORY</h2>
            <Input onChange={(e) => setSchool(e.target.value)} value={school} label="SCOOL NAME: " />
            <Input onChange={(e) => setStudied(e.target.value)} value={studied} label="STUDIED FOR: " />
            <Input onChange={(e) => setDuration(e.target.value)} value={duration} label="YEAR FROM/TO"  />
            <div className="btns">
            <Button onClick={handleClick} label ="Save"/>
            {education.length > 0 && <Button onClick={handleBack} label="back"/>}            
            </div>
        </form>
        <section style={{
        
            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',
            margin:'0.4rem 0'          
            }}>
                <h2>EDUCATION DETAILS</h2>
                {education.map((item, index) => (
                <div key={item.id}>
                <p>School: {item.schoolName}</p>
                <p>Studied: {item.levelStudiedFor}</p>
                <p>Duration: ({item.durationPeriod})</p>
                <Button onClick={(e) => handleEdit(e, item)} label="edit"/>
                <Button label="delete" onClick={(e) => handleDelete(e, item)}/>
                </div>
                ))}
                <div className="btns">
                <Button onClick={handleAdd} label="add"/>
                </div>
        
        </section>
        </>
    )
}