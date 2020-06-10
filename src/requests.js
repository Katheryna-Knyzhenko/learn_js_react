import $ from "jquery";


export function getImages (page, successCallback) {
    $.ajax(`https://repetitora.net/api/JS/Images?page=${page}&count=1`, {
        success: successCallback
    });
}