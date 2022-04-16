const initstate={type:"CITY_DATA",citydata:[]}
export const Cityreducer=(store=initstate,{type,payload})=>{
    switch(type){
        case "CITY_DATA":{
            return {...StorageEvent,citydata:payload}
        }
        default:{
            return store;
        }
    }
}