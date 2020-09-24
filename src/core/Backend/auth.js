import {API} from '../../backend'

export const signup = user => {
    console.log(JSON.stringify(user))
    return fetch(`${API}/signup`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        console.log("response from backend")
        // return response.json()
    })
    .catch(error => console.log(error))
}