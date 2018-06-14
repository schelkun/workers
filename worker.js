importScripts('crypto-js.min.js', 'aes.min.js');

onmessage = function (e) {
    let original = e.data;
    let crypted = CryptoJS.AES.encrypt(original, 'key');
    let decrypted = CryptoJS.AES.decrypt(crypted, 'key');
    postMessage(decrypted);
};
