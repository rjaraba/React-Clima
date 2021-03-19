import React from 'react';


const Clima = ({resultado}) => {

    //extraer los valores
    const { name, main, sys } = resultado;

    //Para que no intente cargar nada la primera vez sin que hayamos consultado
    if (!name) return null;

    //Grados kelvin
    const kelvin = 273.15;
    return ( 
    
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2> El clima de {name} es: </h2>
                <p>Temperatura actual: &nbsp;
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p> Temperatura máxima:&nbsp;
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p> Temperatura mínima:&nbsp;
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span> &#x2103; </span>
                </p>

                <p> Humedad:&nbsp;
                    { main.humidity } <span> % </span>
                </p>

                <p> Salida del sol:&nbsp;
                    { formatearTimestamp(sys.sunrise) }
                </p>

                <p> Puesta del sol:&nbsp;
                { formatearTimestamp(sys.sunset) }
            </p>

            </div>
        </div>
    
    );
}

const formatearTimestamp = (unix_timestamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}
 
export default Clima;