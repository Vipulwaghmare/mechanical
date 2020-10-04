const { API } = require("../../backend");

export const getEseYears = () => {
    return fetch(`${API}/getEseYears`,{
        method: "GET",
    })
    .then(res => {
        return res.json()
    })
    .catch(error => console.log(error))
}