import Input from "./input"
import Button from "./button"
import { useState } from "react";

export default function EducationForm() {
    const [showForm, setShowForm] = useState(true)
    const [school, setSchool] = useState('');
    const [studied, setStudied] = useState('');
    const [duration, setDuration] = useState('');
    const [history, setHistory] = useState([]);


    
        function handleClick(e) {
            e.preventDefault();
            e.stopPropagation();
            setShowForm(false);
            setHistory([...history, {
                name: school,
                studied: studied,
                duration: duration
            }])
            
        }
        //function to edit individual items in the history array
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
            {history.length > 0 && <Button onClick={handleBack} label="back"/>}            
            </div>
        </form>
        <section style={{
        
            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',
            margin:'0.4rem 0'          
            }}>
                <h2>EDUCATION DETAILS</h2>
                {history.map((item, index) => (
                <div key={index}>
                <p>School: {item.name}</p>
                <p>Studied: {item.studied}</p>
                <p>Duration: ({item.duration})</p>
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