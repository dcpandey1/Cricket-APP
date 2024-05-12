import React, { useState } from "react";
import MatchDetailsModal from "./MatchDetailsModal";

const MatchCard = ({ match }) => {
    const { id, teams, teamInfo, status, score, matchType } = match;
    const [matchDetails, setMatchDetails] = useState(null);

    const fetchMatchDetails = async () => {
        try {
            const response = await fetch(`https://api.cricapi.com/v1/match_info?apikey=9ca57da3-e32a-4977-ae38-65f0dd7b7caf&id=${id}`);
            const data = await response.json();
            setMatchDetails(data.data);
        } catch (error) {
            console.error("Error fetching match details:", error);
        }
    };

    return (
        <div>
            <a
                href="#"
                className="flex flex-wrap flex-row max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                onClick={fetchMatchDetails}
            >   
                {teams.map((team, index) => (
                    <div key={index} className="flex items-center text-gray-800 p-2">
                        <img src={teamInfo[index].img} alt={team} className="w-10 h-10 mr-3 rounded-full" />
                        <h4 className="font-semibold text-white mr-4">{teamInfo[index].name}</h4>
                        {score.length > 0 && score[index] && (
                            <h5 className="ml-auto text-white">{`${score[index].r} - ${score[index].w}  (${score[index].o})`}</h5>
                        )}
                    </div>
                ))}
                <h5 className="text-white m-4">{status}</h5>
            </a>

            {matchDetails && <MatchDetailsModal matchDetails={matchDetails} />}
        </div>
    );
};

export default MatchCard;
