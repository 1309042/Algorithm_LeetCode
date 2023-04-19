/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let ip = "";

    for(let i = 0; i < address.length; i++) {
        if(address[i] === ".") {
            ip += "[.]";
        } else {
            ip += address[i];
        }
    }
              
    return ip;
};