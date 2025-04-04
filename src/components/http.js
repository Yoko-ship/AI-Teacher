export async function FetchingData(value){
    const response = await fetch("https://ai-teacher-d83unt96x-yoko-ships-projects.vercel.app/AI",{
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