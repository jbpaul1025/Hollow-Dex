import { useEffect } from 'react';

function App() {

    const API_URL = 'https://hallownest-api.vercel.app/api/v1';
    
    useEffect(() => {
    async function fetchData() {
        try {
            const response = await fetch(
                `${API_URL}/boss/false-knight`
            );

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();

            console.log(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    fetchData();
}, []);

    return (
        <div></div>
    );
}

export default App;