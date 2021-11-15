import React from 'react';
import { useState } from 'react';
import { SessionTypes } from '../enums/SessionTypes';

const Upload = (user) => {
    const [sessionType, setSession] = useState(SessionTypes.WEDDINGS);
    const [sessionYear, setSessionYear] = useState("");
    const [sessionName, setSessionName] = useState("");

    const handleSessionTypeSelect = (e) => {
        setSession(e.target.value)
    }

    const handleSessionYearSelect = (e) => {
        setSessionYear(e.target.value)
    }

    const handleSessionName = (e) => {
        setSessionName(e.target.value)
    }
    
    const buildPayload = () => {
        
    }

    return (
        <section>
            <form>
                <label for="sessionType">Session Type</label>
                <select id="sessionType" value={sessionType} onChange={(e) => handleSessionTypeSelect(e)}>
                    {Object.values(SessionTypes).map(value => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
                <label for="sessionDate">Session Date</label>
                <select id="sessionDate" value="" onChange={(e) => handleSessionYearSelect(e)}></select>
                <label for="sessionName">Session Name</label>
                <input id="sessionName" type="text"/>
                <label for="sessionFiles">Upload Images</label>
                <input
                    id="sessionFiles"
                    type="file"
                    name="file-input"
                    accept="image/jpeg, image/png"
                    multiple="true"
                />
                <button>Submit</button>
            </form>
        </section>
    )
}

export default Upload;