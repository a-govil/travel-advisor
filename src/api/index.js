import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData=async(sw,ne) => {
    try{
        const { data: { data } } =  await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '8849bd8352mshd8f6ddfdbb142cdp1f7923jsncf4a408dedd6',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
        return data;
    } catch (error) {
        console.log(error)

    }
}