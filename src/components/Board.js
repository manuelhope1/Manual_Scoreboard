import Top from './Top';
import hometeam from '../images/chelsea.png';
import awayteam from '../images/city.png';
import React, { useState } from 'react';

export default function Board(){

    return(

        <div className="board">
            <Top/>
            <div className='main'>
                <div className='sboard'>
                    <div className='teamb'>
                        <div className='teamcir'>
                            <img src={hometeam} className="tlogo"/>
                        </div>
                    </div>
                    <div className='scoreb'>
                        <h2>0:0</h2>
                    </div>
                    <div className='teamb'>
                        <div className='teamcir'>
                            <img src={awayteam} className="tlogo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

