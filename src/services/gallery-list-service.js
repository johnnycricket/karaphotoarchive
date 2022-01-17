import {Storage} from 'aws-amplify';

export const FileList = (
    listKey
) => {
    return getKeys(listKey)
}

const getKeys = (listKey) => {
    console.log('listkey', listKey)
    Storage.list(listKey, {level: 'protected'})
    .then((result) => {
        console.log(result)
        return result;
    })
    .catch((e) => {
        console.log(e);
    });
}
