import React from 'react';

const FromLibrary = (props:any) => <div>
    <p>{window.location.hostname}:{window.location.port}</p>
    <p>Component from m-library.</p>
    <p>Loaded in {props.loadedFrom ?? 'm-library'}</p>
    </div>

export default FromLibrary