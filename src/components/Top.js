
import React from 'react'
import League from './League';



export default function Top(){
        
    return (
        <div className="top">
            <div className="live">
                <span className="dot"></span>Live
            </div>
            <div className="league">
                <League/>
                <input className='ileague'/>
            </div>
        </div>
    );
}