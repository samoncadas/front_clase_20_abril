var endPoint = "http://10.152.191.26:8000/api/register"

export function post(datos){
    return fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
    
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        return data
    })

}