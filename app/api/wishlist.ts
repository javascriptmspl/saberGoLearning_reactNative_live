import { BASE_URL } from ".";



export const api_wishListAdd = async (userId: string, courseId: string) => {

    console.log('- courseId -', courseId)
    const uri = `${BASE_URL}/wishlist/create`;
    const response = await fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "courseId": courseId,
            "userId": userId
        })
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};



export const api_getWishList = async (userId: string,) => {
    const uri = `${BASE_URL}/wishlist/wishlistGetByUser/${userId}`;
    const response = await fetch(uri, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};


// DELETE WISHLIST COURSES -> DELETE

export const api_deleteWishList = async (id: string,) => {
    const uri = `${BASE_URL}/wishlist/deletewishlist/${id}`;
    const response = await fetch(uri, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};



// DELETE WISHLIST BY ID -> DELETE

export const api_wishListRemove = async (userid: string, courseid: string) => {
    const uri = `${BASE_URL}/wishlist/deletewishlistByUser/${userid}/${courseid}`;
    const response = await fetch(uri, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};
