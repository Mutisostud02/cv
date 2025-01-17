import Input from "./input"
import Button from "./button"
import { useState, useEffect } from "react";

export default function EducationForm({
    schoolName,
    levelStudiedFor,
    durationPeriod,
    onUpdate,
    education
}) {
    const [showForm, setShowForm] = useState(true)
    const [school, setSchool] = useState(schoolName);
    const [studied, setStudied] = useState(levelStudiedFor);
    const [duration, setDuration] = useState(durationPeriod);

    const updatedDetails = {
        schoolName: school,
        levelStudiedFor: studied,
        durationPeriod: duration
    }

    useEffect(() => {
        setSchool(schoolName)
        setStudied(levelStudiedFor),
        setDuration(durationPeriod)
    }, [schoolName, levelStudiedFor, durationPeriod])


    
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false);
            onUpdate(updatedDetails)
            
        }
      
        //function to edit individual items in the education array
        function handleEdit(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(true)
        }
        function handleAdd(e) {
            e.preventDefault()
            e.stopPropagation()
            setShowForm(true)
            setSchool('');
            setStudied('')
            setDuration('')          
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
                <div key={index}>
                <p>School: {item.schoolName}</p>
                <p>Studied: {item.levelStudiedFor}</p>
                <p>Duration: ({item.durationPeriod})</p>
                <Button onClick label="edit"/>
                </div>
                ))}
                <div className="btns">
                <Button onClick={handleAdd} label="add"/>
                </div>
        
        </section>
        </>
    )
}