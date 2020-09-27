const { API } = require("../../../backend");

export const getYears = () => {
    return fetch(`${API}/getGateYears`,{
        method: "GET"
    }).then(response=>{
        return response.json()
    }).catch(error=> console.log(error))
}