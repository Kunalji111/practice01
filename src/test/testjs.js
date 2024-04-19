const myFun = function(val){
    return {    
    fun1: (val1) => {
            return val + val1;
        },
        fun2: (val1) => {
            return val1 - val;
        }
    }
}
console.log(myFun(12).fun2(5))