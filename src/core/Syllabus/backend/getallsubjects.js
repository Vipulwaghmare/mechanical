const { API } = require("../../../backend");

export const getAllSubjects = () => {
    return fetch(`${API}/allsubjects`,{
        method: "GET"
    }).then(response=>{
        console.log(response)
        return response.json()
    }).catch(error=> console.log(error))
}