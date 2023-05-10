/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) {
        return false 
    
    } else if (s.length === t.length){  
        
       let originS = s.split('').sort().join('');
       let mixT = t.split('').sort().join(''); 
        
        if(originS === mixT) {
             return true;
            
        } else {
            return false;
        }
    }

};