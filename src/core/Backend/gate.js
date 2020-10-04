const { API } = require("../../backend");

export const getGateYears = () => {
    return fetch(`${API}/getGateYears`,{
        method: "GET",
    })
    .then(res => {
        return res.json()
    })
    .catch(error => console.log(error))
}