import React, { useEffect, useState } from "react";
import SeriesInfo from "./SeriesInfo";

const Series = () => {
    const [series, setSeries] = useState([]);
    const [selectedSeriesId, setSelectedSeriesId] = useState(null);

    const fetchData = async () => {
        try {
            const res = await fetch(
                "https://api.cricapi.com/v1/series?apikey=0062f83d-b28e-40c6-9586-6ef744af6dce&offset=0"
            );
            const data = await res.json();
            setSeries(data.data);
        } catch (error) {
            console.error("Error fetching series:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleViewSeries = (seriesId) => {
        setSelectedSeriesId(seriesId);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Start Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            End Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {series.map((series) => (
                        <tr key={series.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {series.name}
                            </th>
                            <td className="px-6 py-4">{series.startDate}</td>
                            <td className="px-6 py-4">{series.endDate}</td>
                            <td className="px-6 py-4">
                                <button
                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleViewSeries(series.id)}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedSeriesId && <SeriesInfo series={selectedSeriesId} />}
        </div>
    );
};

export default Series;
