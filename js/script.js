
const apiUrl = 'https://restcountries.com/v3.1/all';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('La respuesta no fue exitosa.');
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Hubo un problema al obtener los datos:', error);
    }
}

fetchData();
