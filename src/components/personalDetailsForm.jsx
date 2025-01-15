import Input from "./input"
import Button from "./button"
import { useState } from "react";

export default function PersonalDetailsForm() {
    const [showForm, setShowForm] = useState(true)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telNumber, setTelNumber] = useState('');



    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowForm(false)
    }
    function handleEdit(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowForm(true)
    }
    return (
        <>
        <form style={{
            display: showForm ? 'block' : 'none',
        }}>
            <h2>PERSONAL DETAILS</h2>
            <Input onChange={(e) => setName(e.target.value)} label="FULL NAME: " />
            <Input onChange={(e) => setEmail(e.target.value)} label="EMAIL: " />
            <Input onChange={(e) => setTelNumber(e.target.value)} label="TEL NO:" />
            <div className="btn">
            <Button onClick={handleClick} label ="Save"/>
            </div>
        </form>
        <section style={{

            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',          
            }}>
                <h2>PERSONAL DETAILS</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Tel no: {telNumber}</p>

                <div className="btn">
                <Button onClick={handleEdit} label="edit"/>
                </div>

        </section>
        </>
        
    )
}