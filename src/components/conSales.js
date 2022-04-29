import React, {useState} from 'react';
import Header from "../components/header";
import Contact from "../components/Navigation/Footer";
import bgi from "../assets/DesignImages/ContactPageImg_Green.png";
function ConSales(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [mobileNumber, setMobileNumber] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
        let res = await fetch("https://t4p4fob25e.execute-api.us-east-1.amazonaws.com/default/sendContactEmail", {
            method: "POST",
            body: JSON.stringify({
            senderName: name,
            senderEmail: email,
            // mobileNumber: mobileNumber,
            description: description,
            }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
            setName("");
            setEmail("");
            setDescription("");
            setMessage("Message sent successfully");
        } else {
            setMessage("Some error occured");
        }
        } catch (err) {
        console.log(err);
        }
    };

    return (
        <div>
            <Header/>
        <div className="container6">
            <img id="abcd" src={bgi} alt="image" height={200} width="900"/>    
        </div>
        
        <div id="k" className="col-4">
        <h3>Contact Sales</h3>
        <form onSubmit={handleSubmit}>
            <input id="ipb" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/><br/>
            <input id="ipb" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br/>
            <input id="ipb" type="text"value={description}placeholder="Description" onChange={(e) => setDescription(e.target.value)}/><br/>
            {/* <input type="text" value={mobileNumber} placeholder="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} /> */}
            

            <button id="bt" type="submit">SUBMIT</button>

            <h3 className="message">{message ? <p>{message}</p> : null}</h3>
        </form>
        </div>
        <Contact/>
        </div>
    );
    }


export default ConSales;