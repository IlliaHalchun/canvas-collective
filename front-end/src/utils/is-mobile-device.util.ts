const device_type: string = window.navigator.userAgent;

export function isMobileDevice() {
        if(
            device_type.match(/Android/i) ||
            device_type.match(/webOS/i) ||
            device_type.match(/iPhone/i) ||
            device_type.match(/iPad/i) ||
            device_type.match(/iPod/i) ||
            device_type.match(/BlackBerry/i) ||
            device_type.match(/Windows Phone/i) 
        ) 
        return true;
        return false;
}
