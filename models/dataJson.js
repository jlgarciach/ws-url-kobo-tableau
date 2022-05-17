require('dotenv').config();

const axios = require('axios');
axios.defaults.headers.common['Authorization'] = process.env.TOKEN;

class DataJson {
    
    constructor () {
        // TODO: leer DB si existe        
    }

    async docentes () {
        try {        
            const resp = await axios.get(process.env.URL_DOCENTES);
            console.log( resp.status );
            // console.log( resp.data );            
            return resp.data;
        } catch (error) {
            return [];
        }
    }

    async estudiantes () {
        try {        
            const resp = await axios.get(process.env.URL_ESTUDIANTES);
            console.log( resp.status );
            // console.log( resp.data );            
            return resp.data;
        } catch (error) {
            return [];
        }
    }

}


module.exports = DataJson;