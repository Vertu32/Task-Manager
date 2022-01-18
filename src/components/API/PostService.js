import axios from "axios";



export default class PostService {
   
    static async getAll() {
            const response = await axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=c27a57f11964d8d9488541207d1a0d5b`)
            console.log(response)
            return response
            
        
    }
}