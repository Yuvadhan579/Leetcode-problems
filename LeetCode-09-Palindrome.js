/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0)
    {
        return false;
    }
    let temp=x
    let rev=0
    while(x>0){
        sum=x%10;
        rev=rev*10+sum;
        x=Math.trunc(x/10);
    }
    return temp==rev;
    
};