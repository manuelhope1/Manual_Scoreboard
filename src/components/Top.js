import epl from '../images/epl.png';


export default function Top(){
    return (
        <div className="top">
            <div className="live">
                <span className="dot"></span>Live
            </div>
            <div className="league">
                <img src={epl} className="clogo" />
                <p>English Premier League</p>
            </div>
        </div>
    );
}