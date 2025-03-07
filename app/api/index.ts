export const BASE_URL_LIVE: string = 'https://do.meander.software:1000/api';
export const BASE_URL_DEV: string = 'https://do.meander.software:1000/api';
export const BASE_URL: string = BASE_URL_DEV



// -----> API * HELPER'S
export const getImageUrl = (name: string) => `${BASE_URL.replace('api', 'assets/images/')}${name}`
// export const getCourseImageUrl = (name: string) => `https://do.meander.software:5000/assets/images/${name}`
export const getCourseImageUrl = (name: string) => `https://meandersoftware.s3.eu-north-1.amazonaws.com/${name}`
export const getCourseVideoUrl = (key: string) => `${BASE_URL}/apps/videoStream?key=${key}`
export const getDocumentUrl = (name: string) => `https://do.meander.software:5000/assets/documents/${name}`
export const getModuleImageUrl = (name: string) => `https://meanderlive.s3.amazonaws.com/${name}`



//        https://meandersoftware.s3.amazonaws.com/lms/courses/images/S0S0FUrQmparty.png

