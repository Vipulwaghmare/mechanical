const { API } = require("../../../backend");

export const getAllSubjects = () => {
    return fetch(`${API}/allsubjects`,{
        method: "GET"
    }).then(response=>{
        return response.json()
    }).catch(error=> console.log(error))
}

export const subtopicArray = async () => {
    // Returns all subtopics added in an array
    let list = []
    let p = await getAllSubjects()
    let q = await p.map(r=>(r.subtopics));
    let r = await q.map(x => {
        list.push(...x)
    })
    console.log("MEH", q)
    return list
}
// subtopicArray()