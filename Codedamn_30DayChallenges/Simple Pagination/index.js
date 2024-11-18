
export const getAllPost = async (page) =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${page}&_page=1`)
    return await response.json();
}