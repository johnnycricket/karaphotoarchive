import React from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import {FileList} from '../services/gallery-list-service';
import { useState, useEffect } from 'react';


const Galleries = (user) => {
    const [pathList, setPathList] = useState([])
    const [currentPath, setCurrentPath] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setPathList(FileList(currentPath));
        console.log(pathList)
    }, [currentPath, pathList])

    return (
        <>
            <BreadCrumbs pathString={currentPath}/>
            <div>
                {pathList?.map((path) => {
                    return (
                        <p>{path.key}</p>
                    )
                })}
            </div>
        </>
    )
}

export default Galleries;