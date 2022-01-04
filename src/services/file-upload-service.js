import {Storage} from 'aws-amplify';
 
const FileUploadService = (
        sessionDetails,
        files
    ) => {

    const filePath = setFilePath(sessionDetails.sessionTitle, sessionDetails.sessionYear, sessionDetails.sessionType);
        uploadFiles(files, filePath);
}

const setFilePath = (sessionName, sessionYear, sessionType) => {
    return `${sessionType}/${sessionYear}/${sessionName}`;
}

const uploadFiles = (files, path) => {
    files.forEach(f => {
        const status = Storage.put(`${path}/${f.filename}`, f.file, {
            progressCallback(progress) {
                console.log(`Uploaded: ${progress.uploaded}/${progress.total}`)
            }
        });
        return status;
    });
}

export default FileUploadService;
