import Input from "./input"
import Button from "./button"
import { useEffect, useState } from "react";

export default function PersonalDetailsForm({
    fullName,
    email,
    phoneNumber,
    onUpdate
}) {
    const [showForm, setShowForm] = useState(true)
    const [name, setName] = useState(fullName);
    const [userEmail, setEmail] = useState(email);
    const [telNumber, setTelNumber] = useState(phoneNumber);

    useEffect(() => {
        setName(fullName),
        setEmail(email)
        setTelNumber(phoneNumber)
    }, [fullName, email, phoneNumber])

    // function handleClick(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setShowForm(false)
    //     onUpdate({
    //         fullName:name,
    //         email: userEmail,
    //         phoneNumber: telNumber,

    //     })
    // }
    function handleNameChange(e) {
        setName(e.target.value)
        onUpdate({
            fullName: e.target.value,
            email,
            phoneNumber
        })
    }
    function handleEmailChange(e) {
        setEmail(e.target.value)
        onUpdate({
            fullName,
            email: e.target.value,
            phoneNumber
        })
    }
    function handlePhoneChange(e) {
        setTelNumber(e.target.value)
        onUpdate({
            fullName,
            email,
            phoneNumber: e.target.value
        })
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
            <Input onChange={handleNameChange} label="FULL NAME: " value={name}/>
            <Input onChange={handleEmailChange} label="EMAIL: " value={userEmail}/>
            <Input onChange={handlePhoneChange} label="TEL NO:" value={telNumber}/>
            <div className="btn">
            </div>
        </form>
        <section style={{

            maxWidth:"100%",
            display: showForm? 'none' : 'block', 
            backgroundColor: 'rgb(53, 53, 109)',          
            }}>
                <h2>PERSONAL DETAILS</h2>
                <p>Name: {name}</p>
                <p>Email: {userEmail}</p>
                <p>Tel no: {telNumber}</p>

                <div className="btn">
                <Button onClick={handleEdit} label="edit"/>
                </div>

        </section>
        </>
        
    )
}