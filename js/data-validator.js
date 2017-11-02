/**
 * Created by Admin on 2016/11/17.
 */
function dataValidator(string, errorMsg, row){
    var array = string.split(/;|,| /);
    for(var i=0; i<array.length; i++) {
        //遍历完所有的identifier并记录保存到数组iArray。
        var tokenObjs = esprima.tokenize(array[i]);
        //iArray中过滤掉Punctuator的obj
        for(var j=0; j<tokenObjs.length; j++) {
            if (tokenObjs[j]["type"]=="Punctuator") {
                tokenObjs.splice(j, 1);
            }
        }
    }
    return array;
}