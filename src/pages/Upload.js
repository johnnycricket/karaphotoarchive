import React from 'react';
import { useState } from 'react';
import { SessionTypes } from '../enums/SessionTypes';

const Upload = (user) => {
    const [sessionType, setSession] = useState(SessionTypes.WEDDINGS);

    const handleSessionTypeSelect = (e) => {
        setSession(e.target.value)
    }
    
    console.log(user)
    console.log(sessionType);

    return (
        <section>
            <form>
                <label>Session Type</label>
                <select value={sessionType} onChange={(e) => handleSessionTypeSelect(e)}>
                    {Object.values(SessionTypes).map(value => 
                        <option key={value} value={value}>{value}</option>
                    )}
                </select>
                <label>Upload Images</label>
                <input 
                    type="file"
                    name="file-input"
                    accept="image/jpeg, image/png"
                    multiple="true"
                />
            </form>
        </section>
    )
}

export default Upload;