import React, { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

const Match = () => {
  const [matches, setMatches] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=9ca57da3-e32a-4977-ae38-65f0dd7b7caf&offset=0');
    const data = await res.json();
    setMatches(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
  }, [matches]); // Log matches when it changes

  return (
    <div className='flex flex-wrap'>
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
};

export default Match;
