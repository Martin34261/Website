const apiURL = "https://mindicador.cl/api";

async function fetchIndicators() {
    try {
        // Realiza la solicitud a la API
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        // Convierte la respuesta a JSON
        const data = await response.json();

        //Selecciona el contenedor donde se mostrarán los datos
        const dataContainer = document.getElementById("api-data");

        //Crea elementos para mostrar los indicadores principales
        const indicators = [
            { name: "Dólar", key: "dolar", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg" },
            { name: "Euro", key: "euro", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg" },
            { name: "UF", key: "uf", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg" },
            { name: "UTM", key: "utm", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg" },
            { name: "UF", key: "uf", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29470.svg" },
            { name: "IVP", key: "ivp", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg" },
            { name: "Dolar_intercambio", key: "dolar_intercambio", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg" },
            { name: "IPC", key: "ipc", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg" },
            { name: "Imacec", key: "imacec", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27772.svg" },
            { name: "TPM", key: "tpm", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/36148.svg" },
            { name: "Libra_cobre", key: "libra_cobre", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/8916.svg" },
            { name: "Tasa_desempleo", key: "tasa_desempleo", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4705.svg" },
            { name: "Bitcoin", key: "bitcoin", image: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5176.svg" },
        ];

        indicators.forEach(indicator => {
            if (data[indicator.key]) {
                const article = document.createElement("article");
                article.innerHTML = `
                    <div class="indicator-horizontal">
                        <div class ="indicator-text">
                            <h3>${indicator.name}</h3>
                            <p>Valor: ${data[indicator.key].valor.toLocaleString("es-CL")}</p>
                            <p>Unidad de medida: ${data[indicator.key].unidad_medida}</p>
                            <p>Fecha: ${new Date(data[indicator.key].fecha).toLocaleDateString()}</p>
                        </div>
                        <img src="${indicator.image}" || 'https://via.placeholder.com/50'}" alt="Ícono de ${indicator.name}" class="indicator-image">
                    </div>
                `;  
                dataContainer.appendChild(article);
            }
        });
    } catch (error) {
        console.error("Error al leer la API:", error);

        // Muestra un mensaje de error en la página
        const dataContainer = document.getElementById("api-data");
        dataContainer.innerHTML = `<p>Error al cargar los datos. Intenta nuevamente más tarde.</p>`;
    }
}

// Llama a la función al cargar la página
fetchIndicators();