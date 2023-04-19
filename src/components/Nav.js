import React, { useState } from 'react';



export default function Nav (){

    const [showDiv, setShowDiv]= useState(false);

    const handleClick = () => {
        setShowDiv(prevState => !prevState);
    }

    

    return(
        <nav>
            <i class='bx bx-cog' onClick={handleClick}></i>
            <div className="setbox" style={{display: showDiv ? 'flex':'none'}}>
                <div className="teamboxa">
                    <div className="state"><h6>Home Team</h6></div>
                    <div className="goalbox">
                        <i class='bx bx-football' ></i>
                        <i class='bx bxs-x-circle'></i>
                        <i class='bx bx-reset'></i>
                        
                    </div>

                </div>
                <div className="teamboxb">
                    <div className="state"><h6>Away Team</h6></div>
                    <div className="goalbox">
                        <i class='bx bx-football'></i>
                        <i class='bx bxs-x-circle'></i>
                        <i class='bx bx-reset'></i>
                    </div>

                </div>
            </div>
        </nav>
        );
}

