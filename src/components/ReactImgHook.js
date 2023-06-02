import React from "react";
import { useState, useEffect } from 'react';

var num = Math.floor(Math.random() * 1000);
var num1 = Math.floor(Math.random() * 1000);
var num2 = Math.floor(Math.random() * 1000);
  
const useCustomHook = () => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        let source = "https://picsum.photos/id/" + num + "/1500/1000";
        let source1 = "https://picsum.photos/id/" + num1 + "/1500/1000";
        let source2 = "https://picsum.photos/id/" + num2 + "/1500/1000";
      try {
        // Perform an asynchronous operation, such as fetching data from an API
        const response = await fetch('source');
        const response2 = await fetch('source1');
        const response3 = await fetch('source2');
        const result = await response.json();
        const result2 = await response2.json();
        const result3 = await response3.json();
        setData(result);
        setData2(result2);
        setData3(result3);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once (on component mount)

  return { data, data2, data3, loading, error };
};