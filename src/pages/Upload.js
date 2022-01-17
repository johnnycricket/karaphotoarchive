import React from 'react';
import { useState } from 'react';
import { SessionTypes } from '../enums/SessionTypes';
import { Years } from '../enums/Years';
import ImageFile  from '../components/ImageFile';
import FileUploadService from '../services/file-upload-service';

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
        if(sessionFiles.length === 0) {
            setSessionFiles(sessionFiles => [...sessionFiles, entry]);
        } else {
            let isNew = false;
            for(let file of sessionFiles){
                console.log('foreaching')
                if(file.name === entry.name){
                    console.log('found you, already in here');
                    isNew = false;
                    break;
                }
                console.log('didn\'t find you');
                isNew = true;  
            }
            console.log(isNew);
            if(isNew) setSessionFiles(sessionFiles => [...sessionFiles, entry]);
            isNew = false;
        }
    }

    const handleFiles = (e) => {
        for(let file of e.target.files){
            console.log(file);
            checkAlreadyInState(file)
        }
    }

    const handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        const sessionDetails = {
            sessionName: sessionName,
            sessionYear: sessionYear,
            sessionType: sessionType
        }
        FileUploadService(sessionDetails, sessionFiles)
    }

    return (
        <div className="upload">
            <form onSubmit={(e) => handleSubmit(e)}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="sessionType">Session Type</label>
                            </td>
                            <td>
                                <select id="sessionType" value={sessionType} onChange={(e) => handleSessionTypeSelect(e)}>
                                    {Object.values(SessionTypes).map(value => 
                                        <option key={value} value={value}>{value}</option>
                                    )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="sessionDate">Session Date</label>
                            </td>
                            <td>
                            <select id="sessionDate" value={sessionYear} onChange={(e) => handleSessionYearSelect(e)}>
                                {Object.values(Years).map(value => 
                                    <option key={value} value={value}>{value}</option>
                                )}
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="sessionName">Session Name</label>
                            </td>
                            <td>
                                <input id="sessionName" type="text" onChange={(e) => handleSessionName(e)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="sessionFiles">Upload Images</label>
                            </td>
                            <td>
                                <input
                                    id="sessionFiles"
                                    type="file"
                                    name="file-input"
                                    multiple={true}
                                    onChange={(e) => handleFiles(e)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>{'Files'}</td>
                            <td className="fileList">
                                {sessionFiles.map((file) => {
                                    return (
                                        <ImageFile key={file.name} file={file} />
                                    )
                                })}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default Upload;