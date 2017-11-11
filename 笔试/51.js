function jsonp(url,obj={}) {
    return new Promise((resolve,reject)=>{
        obj.data=obj.data || {};
        if (!url) {
            throw new Error("参数不合法");
        }
    
        //创建 script 标签并加入到页面中
        var callbackName = ("resultFn" + Math.random()*Math.random()).replace(".", "");
        obj.data.callback = callbackName;
        var params = formatParams(obj.data);
        var oHead = document.getElementsByTagName('head')[0];
        var oS = document.createElement('script');
        oHead.appendChild(oS);    
        callbackName = callbackName.split("0")[0];
        window[callbackName] = function (json) {
            oHead.removeChild(oS);
            clearTimeout(oS.timer);
            window[callbackName] = null;
            resolve(json);
        };
        oS.src = url + '?' + params;
    
        //超时处理
        if (obj.overtime) {
            oS.timer = setTimeout(function () {
                window[callbackName] = null;
                oHead.removeChild(oS);
                reject({ message: "已经超时" });
            }, obj.overtime);
        }
    })
};

function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    return arr.join('&');
}