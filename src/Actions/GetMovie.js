
export const GetMovie =async () => {
    const url = `https://api.tvmaze.com/shows`
    const result = await fetch(url)
    const data = await result.json()
    // console.log(data);

    return data
    
}

