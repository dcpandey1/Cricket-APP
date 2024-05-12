import React, { useEffect, useState } from "react";

const SeriesInfo = ({ series }) => {

    const [seriesInfo, setSeriesInfo] = useState(null);

    const fetchSeriesInfo = async () => {
        try {
            const response = await fetch(`https://api.cricapi.com/v1/series_info?apikey=0062f83d-b28e-40c6-9586-6ef744af6dce&id=${series}`);
            const data = await response.json();
            console.log(data.data.info);
            setSeriesInfo(data.data.info);
        } catch (error) {
            console.error("Error fetching series info:", error);
        }
    };

    useEffect(() => {
        if (series) {
            fetchSeriesInfo();
        }
    }, [series]);

    return (
        <div className="modal">
            {seriesInfo && (
                <div>
                    <h1>{seriesInfo.name}</h1>
                    <p>Start Date: {seriesInfo.startdate}</p>
                    <p>End Date: {seriesInfo.enddate}</p>
                    <p>ODI Matches: {seriesInfo.odi}</p>
                    <p>T20 Matches: {seriesInfo.t20}</p>
                    <p>Test Matches: {seriesInfo.test}</p>
                    <p>Squads: {seriesInfo.squads}</p>
                    <p>Total Matches: {seriesInfo.matches}</p>
                </div>
            )}
        </div>
    );
};

export default SeriesInfo;
