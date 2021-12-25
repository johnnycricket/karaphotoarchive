import React from 'react';
import { useState } from 'react';
import { SessionTypes } from '../enums/SessionTypes';
import { Years } from '../enums/Years';

const Upload = (user) => {
    const [sessionType, setSession] = useState(SessionTypes.WEDDINGS);
    const [sessionYear, setSessionYear] = useState("2022");
    const [sessionName, setSessionName] = useState("");
    const [sessionFiles, setSessionFiles] = useState([]);

    const handleSessionTypeSelect = (e) => {
        setSession(e.target.value)
    }

    const handleSessionYearSelect = (e) => {
        setSessionYear(e.target.value)
    }

    const handleSessionName = (e) => {
        setSessionName(e.target.value)
    }

    const checkAlreadyInState = (entry) => {
        sessionFiles.forEach(file => {
            console.log(file);
            console.log(entry);
            if(file === entry){
                return true;
            }
        })
        return false;
    }

    const handleFiles = (e) => {
        let isNotAlreadyInState = checkAlreadyInState(e.target.files[0].name) ?? false;
        console.log(e);
        if(isNotAlreadyInState){
            setSessionFiles(sessionFiles => [...sessionFiles, e.target.files[0]]);
        }
        
    }
    
    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    }

    return (
        <section>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label for="sessionType">Session Type</label>
                <select id="sessionType" value={sessionType} onChange={(e) => handleSessionTypeSelect(e)}>
                    {Object.values(SessionTypes).map(value => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
                
                <label for="sessionDate">Session Date</label>
                <select id="sessionDate" value={sessionYear} onChange={(e) => handleSessionYearSelect(e)}>
                    {Object.values(Years).map(value => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>

                <label for="sessionName">Session Name</label>
                <input id="sessionName" type="text" onChange={(e) => handleSessionName(e)}/>
                
                <label for="sessionFiles">Upload Images</label>
                <input
                    id="sessionFiles"
                    type="file"
                    name="file-input"
                    multiple="true"
                    onChange={(e) => handleFiles(e)}
                />
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Upload;