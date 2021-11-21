import {Storage} from 'aws-amplify';
 
const FileUploadService = (files) => {
    //todo: take session/year/title as path
    //todo: take file and upload
    //todo: take FILES and upload
    //todo: handle 
    
    const setFilePath = (sessionTitle, sessionYear, sessionType) => {
        return `${sessionType}/${sessionYear}/${sessionTitle}`;
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
    };

    const processFiles = (sessionDetails, files) => {
        const filePath = setFilePath(sessionDetails.sessionTitle, sessionDetails.sessionYear, sessionDetails.sessionType);
        uploadFiles(files, filePath);
    }
}

export default FileUploadService;