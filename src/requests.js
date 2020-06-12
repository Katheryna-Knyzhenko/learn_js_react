import $ from "jquery";




// export function getImages (page) {
//     const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);
//
//     return promise;
//
// }
const axios = require('axios');
export function getImages (page) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);

    return promise.then((data) => {return data.data});
}
export function getTasks () {
    const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=5345235`);

    return promise.then((response) => {return response.data});
}