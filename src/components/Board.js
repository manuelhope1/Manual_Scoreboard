import Top from './Top';
import hometeam from '../images/chelsea.png';
import awayteam from '../images/city.png';
import React, {useState} from 'react';
import Teamlogo from './Teamlogo';


export default function Board({hgoal,agoal}){
    return(
        <div className="board">
            <Top/>
            <div className='main'>
                <div className='sboard'>
                    <Teamlogo/>
                    <div className='scoreb'>
                        <h2>{hgoal}:{agoal}</h2>
                    </div>
                    <Teamlogo/>
                </div>
            </div>
        </div>
    );
}

