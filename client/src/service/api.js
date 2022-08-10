import axios from 'axios';

async function  getNews(){
   
    const URL="";

    try{
        
      return await axios.get(`${URL}/news`);
    }
    catch(error)
    {
        console.log("error while calling getNews", error);
    }

}

export default getNews;