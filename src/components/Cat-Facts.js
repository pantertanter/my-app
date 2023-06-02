import { useState, useEffect } from 'react';

const useCatFacts = () => {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setFact(data.fact);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const interval = setInterval(fetchCatFact, 5000); // Fetch new cat fact every 5 seconds

    fetchCatFact(); // Fetch initial cat fact on component mount

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return { fact, loading, error };
};

export default useCatFacts;