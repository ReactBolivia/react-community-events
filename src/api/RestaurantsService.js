import { config } from '../config/config';

export default class RestaurantsService{
  static async getRestaurants(){
    try{
      let response =
        await fetch(`${config.API}/noticias/app/getinfojson`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
        });
      return await response.json();
    }catch(e){
      console.log(e);
      return {success: false, msg: 'Hubo un error en el servidor o su conexión a internet'};
    }
  }
}
