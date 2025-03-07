import axios from 'axios'

const BASE_URL_STRAPI = 'https://content.meander.software'
export const getBlogImageUrl = (image: string) => {
    const url = `${BASE_URL_STRAPI}/${image}`

    console.log(url)
    return url
}



export const getBlogs = async (page: number = 1, pageSize: number = 10,) => {
    const url = `https://content.meander.software/api/ml-blogs?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    // const url = `${BASE_URL_STRAPI}/api/ml-blogs?populate=image`
    console.log(url)
    const res = await axios.get(url)
        .then(function (response: any) {
            console.log(response);
            return response
        })
    return res
}

export const api_getBlogById = async (id: number) => {
    const url = `${BASE_URL_STRAPI}/api/ml-blogs/${id}?populate=image`
    const res = await axios.get(url)
        .then(function (response: any) {
            console.log(response);
            return response
        })
    return res
}

