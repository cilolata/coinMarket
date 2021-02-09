//My api key 
var apiKey = {
    key: 'c061944d-69c8-4473-85aa-1232837a8312'
}

//Get fetch requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apiKey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status' + response.status);
        return response.json();
    })
    .then((api) => {
          console.log(api)

        var texto = "";
        
        
        //Get 10 coins and symbols
        for(let i = 0; i < 10 ; i++){    
            //Show API information
            var data = new Date(api.data[i].first_historical_data);
            var dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
            
            texto = texto + `
            <div class="media col-lg-3">
            <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60" />
            <div class="media-body">
            <h5 class="mt-2">Nome: ${api.data[i].name}</h5>
            <p>Símbolo: ${api.data[i].symbol}</p>
            <p>Data: ${dataFormatada}</p>
            </div>
            </div>
            `;
            
            
            document.getElementById("coins").innerHTML = texto;
        }
        
    }).catch((error) => {
        console.log(error.message);
    });
