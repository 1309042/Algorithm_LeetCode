/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let str = [];
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            
            str.push(s[i]);
        
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
           
            let not = str.pop();
            
            if((s[i] === ')' && not !== '(') || 
               (s[i] === '}' && not !== '{') || 
               (s[i] === ']' && not !== '[')) {
                
                return false;
            }
        }
    }
    
    return str.length === 0;
};