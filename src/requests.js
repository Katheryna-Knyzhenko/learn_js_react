import $ from "jquery";


export function getImages (page) {
    const promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=1`);

    return promise;

}
export function newGetImages (page) {

}