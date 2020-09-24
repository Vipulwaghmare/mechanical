import {API} from '../../backend'

export const signup = user => {
    return fetch(`${API}/signup`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(error => console.log(error))
}

export const signin = user => {
    return fetch(`${API}/signin`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(response=> {
        console.log("signin successful")
        return response.json()
    }).catch(error=>{
        console.log(error)
    })
}

export const signout = () => {
    return fetch(`${API}/signout`,{
        method: "GET",
    }).then(response=>{
        console.log("signout success")
        return response.json
    })
    .catch(error=> console.log(error))
}