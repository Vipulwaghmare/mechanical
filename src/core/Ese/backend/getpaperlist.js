const { API } = require("../../../backend");

export const getYears = () => {
    return fetch(`${API}/getEseYears`,{
        method: "GET"
    }).then(response=>{
        return response.json()
    }).catch(error=> console.log(error))
}