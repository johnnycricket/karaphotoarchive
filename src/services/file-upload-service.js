import {Storage} from 'aws-amplify';

Storage.configure({ level: 'protected' })
 
const FileUploadService = (
        sessionDetails,
        files
    ) => {

    const filePath = setFilePath(sessionDetails.sessionName, sessionDetails.sessionYear, sessionDetails.sessionType);
        uploadFiles(files, filePath);
}

const setFilePath = (sessionName, sessionYear, sessionType) => {
    return `${sessionType}/${sessionYear}/${sessionName}`;
}

const uploadFiles = (files, path) => {
    files.forEach(f => {
        console.log(f);
        const status = Storage.put(`${path}/${f.name}`, f.file, {
            progressCallback(progress) {
                console.log(`Uploaded: ${progress.uploaded}/${progress.total}`)
            }
        });
        return status;
    });
}

export default FileUploadService;
