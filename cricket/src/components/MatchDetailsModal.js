import React from "react";

const MatchDetailsModal = ({ matchDetails }) => {
    // console.log(matchDetails);
    return (
        <div className="modal">
            <div>
                <p>{matchDetails.tossWinner} won the toss and chose to {matchDetails.tossChoice}</p>
                <p>{matchDetails.date}</p>
                <h1>{matchDetails.name}</h1>
                <p>{matchDetails.status}</p>
            </div>
        </div>
    );
};

export default MatchDetailsModal;
