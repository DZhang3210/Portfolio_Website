import { useState, useEffect } from 'react';
import localData from './data/db.json'; // Adjust the path

const useLocalData = (key) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            if (key && localData[key]) {
                setData(localData[key]);
            } else {
                throw new Error('Invalid key');
            }
            setIsPending(false);
        } catch (e) {
            setError('Could not load the data: ' + e.message);
            setIsPending(false);
        }
    }, [key]);

    return { data, isPending, error };
};

export default useLocalData;
