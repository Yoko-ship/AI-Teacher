export async function FetchingData(value){
    const response = await fetch("http://localhost:3000/AI",{
        method:"POST",
        body: JSON.stringify(value),
        headers:{
            "Content-Type":"application/json"
        }
    })
    if(!response.ok){
        const error = new Error("Failed to get data")
        error.code = response.status
        error.info = await response.json()
        throw error
    }
    return response.json()
}