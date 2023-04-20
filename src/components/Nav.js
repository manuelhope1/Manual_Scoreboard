import React, { useState } from 'react';



export default function Nav ({hgoal,hScore,agoal,aScore}){

    const [showDiv, setShowDiv]= useState(false);
    const handleClick = () => {setShowDiv(prevState => !prevState);}
    const homegoal = () => {hScore(hgoal + 1)};
    const chomegoal = () => { if(hgoal === 0) return   
        hScore(hgoal - 1) } ;
    const hgoalreset = () => {hScore(hgoal-hgoal)};
    const awaygoal = () => {aScore(agoal + 1)};
    const cawaygoal = () => { if(agoal === 0) return
        aScore(agoal - 1)};
    const agoalreset = () => {aScore(agoal - agoal)};
    




    return(
        <nav>
            <i class='bx bx-cog' onClick={handleClick}></i>
            <div className="setbox" style={{display: showDiv ? 'flex':'none'}}>
                <div className="teamboxa">
                    <div className="state"><h6>Home Team</h6></div>
                    <div className="goalbox">
                        <i class='bx bx-football' onClick={homegoal}></i>
                        <i class='bx bxs-x-circle' onClick={chomegoal}></i>
                        <i class='bx bx-reset' onClick={hgoalreset}></i>
                        
                    </div>

                </div>
                <div className="teamboxb">
                    <div className="state"><h6>Away Team</h6></div>
                    <div className="goalbox">
                        <i class='bx bx-football' onClick={awaygoal}></i>
                        <i class='bx bxs-x-circle' onClick={cawaygoal}></i>
                        <i class='bx bx-reset' onClick={agoalreset}></i>
                    </div>

                </div>
            </div>
        </nav>
        );
}

