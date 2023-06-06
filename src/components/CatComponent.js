import React from 'react';
import useCatFacts from './Cat-Facts';

const CatFactComponent = () => {
  const { fact, loading, error } = useCatFacts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Cat Fact: {fact}</div>;
};

export default CatFactComponent;
