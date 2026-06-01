// ייבוא REACT 
// USESTATE הוא זכרון פנימי של הדף ומשתמשים בו כדי לשמור מה שהמשתמש מקליד 
import { divide } from "firebase/firestore/pipelines";
import {useState} from "react";

// יצירת קומפוננטה
export default function Login(){
    // יצירת משתנים ( לטופס)
    // PHONE שומר את מב' הטל ו
    // SETPHONE פונ' שמעדכנת את המספר 
    const[phone, setPhone] = useState("");
   
    // CARNUMBER שומר מספר רכב 
    // מעדכן מס' רכב
    const [carNumber, setCarNumber] = useState("");

    // פונקציה רצה שלוחצים על כפתור LOGIN
    // אירוע של הטופס e
    // e.preventDefault אל תרענן את הדף כי ברירת מחדל של טופס הוא רענון ולא רוצים האפליקציה 

    const handleLogin = (e)=>{
        e.preventDefault()    }
}
    console.log([
        phone,
        carNumber,
    ]);

    // html 
    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
    );

