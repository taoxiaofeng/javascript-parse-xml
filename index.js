//解析xml文档/////////////////////////////////////////////////////  
// var xmlDoc = null;
// //支持IE浏览器  
// if (window.ActiveXObject) {
//     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
// }
// //支持Mozilla浏览器  
// else if (document.implementation && document.implementation.createDocument) {
//     xmlDoc = document.implementation.createDocument('', '', null);
// } else {
//     alert("here");
// }
// if (xmlDoc != null) {
//     xmlDoc.async = false;
//     xmlDoc.load("house.xml");
// }

//ie和火狐不仅解析器不一样，解析过程也不一样。如下;  
//ie解析xml文档  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[0].childNodes[0].childNodes[0].nodeValue);//弹出150万  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[0].childNodes[1].childNodes[0].nodeValue);//弹出一室三居  

//层层遍历解析childNodes[1]  
//alert(xmlDoc.childNodes[1].childNodes[1].childNodes[0].childNodes[0].nodeValue);//弹出200万  
//alert(xmlDoc.childNodes[1].childNodes[0].childNodes[0].childNodes[0].nodeValue);//弹出150万  
//alert(xmlDoc.childNodes[1].childNodes[0].childNodes[1].childNodes[0].nodeValue);//弹出一室三居  


//还可以用item(i)进行遍历  
//var nodes=xmlDoc.documentElement.childNodes;  
//alert(nodes.item(0).childNodes.item(0).childNodes.item(0).text); //弹出150万  
//alert(nodes.item(0).childNodes.item(1).childNodes.item(0).text); //弹出一室三居  

//火狐解析xml文档  
//火狐浏览器和ie解析xml不一样节点的值用textContent。  
//并且他会在有的层次child节点前后都加上"\n"换行符。（这个搞不清楚为什么，用firebug调试的时候就是这个样子，所以写过的代码最好测试一下，换个环境就不对了）  
//也就是说第1个节点是"\n",第2个节点才是真正的第一个节点。  
//第3个节点是"\n",第4个节点才是真正的第二个节点。  
//层层获取解析childNodes[0]  
//alert(xmlDoc.childNodes[0].childNodes[1].childNodes[1].textContent);//弹出150万  
//alert(xmlDoc.childNodes[0].childNodes[1].childNodes[3].textContent);//弹出一室三居  

//直接获取节点名解析getElementsByTagName("address")  
//alert(xmlDoc.getElementsByTagName("address")[0].textContent);//弹出150万 一室三居 200万  300万  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[1].textContent);//弹出150万 一室三居  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[1].childNodes[1].textContent);//弹出150万  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[1].childNodes[3].textContent);//弹出一室三居  
//alert(xmlDoc.getElementsByTagName("address")[0].childNodes[3].textContent);//弹出200万   


//火狐也可以用item(1)函数遍历，注意也是有的层次节点前后都加了节点"\n"。  
//第一个节点是item(1)，第二个节点是item(3)，第三个节点是item(5)  
//item(1)函数遍历解析  
//var nodes=xmlDoc.documentElement.childNodes;  
//alert(nodes.item(1).textContent); //弹出150万  一室三居  
//alert(nodes.item(1).childNodes.item(1).textContent); //弹出150万    
//alert(nodes.item(1).childNodes.item(3).textContent); //一室三居   
//解析xml字符串/////////////////////////////////////////////////////////////////////////  
// var str = "<car>" +
//     "<brand><price>50万</price><pattern>A6</pattern></brand>" +
//     "<brand><price>65万</price><pattern>A8</pattern></brand>" +
//     "<brand><price>17万</price></brand>" +
//     "</car>";

// //跨浏览器，ie和火狐解析xml使用的解析器是不一样的。  
// var xmlStrDoc = null;
// if (window.DOMParser) { // Mozilla Explorer  
//     parser = new DOMParser();
//     xmlStrDoc = parser.parseFromString(str, "text/xml");
// } else { // Internet Explorer  
//     xmlStrDoc = new ActiveXObject("Microsoft.XMLDOM");
//     xmlStrDoc.async = "false";
//     xmlStrDoc.loadXML(str);
// }


//ie解析xml字符串  
//alert(xmlStrDoc.getElementsByTagName("car")[0].childNodes[0].childNodes[0].childNodes[0].nodeValue);//弹出50万  
//alert(xmlStrDoc.getElementsByTagName("car")[0].childNodes[0].childNodes[1].childNodes[0].nodeValue);//弹出A6  

//还可以用item(i)进行遍历  
//var strNodes=xmlStrDoc.documentElement.childNodes;  
//alert(strNodes.item(0).childNodes.item(0).childNodes.item(0).text); //弹出50万  
//alert(strNodes.item(0).childNodes.item(1).childNodes.item(0).text); //弹出A6  



//火狐解析xml字符串  
//火狐浏览器和ie解析xml不一样节点的值用textContent。  
//并且他会在有的层次child节点前后都加上"\n"换行符。  
//也就是说第1个节点是"\n",第2个节点才是真正的第一个节点。  
//第3个节点是"\n",第4个节点才是真正的第二个节点。  
//alert(xmlStrDoc.childNodes[0].childNodes[1].textContent);//弹出65万  A8  
//alert(xmlStrDoc.childNodes[0].childNodes[1].childNodes[1].textContent);//A8  
//alert(xmlStrDoc.childNodes[0].childNodes[1].childNodes[0].textContent);//弹出65万  

//火狐也可以用item(1)函数遍历，注意也是有的层次节点前后都加了节点"\n"。  
//第一个节点是item(1)，第二个节点是item(3)，第三个节点是item(5)  
//var nodes=xmlStrDoc.documentElement.childNodes;  
//alert(nodes.item(1).textContent); //弹出65万  A8  
//alert(nodes.item(1).childNodes.item(0).textContent); //弹出65万   
//alert(nodes.item(1).childNodes.item(1).textContent); //弹出A8
// try //Internet Explorer  
// {
//     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//     xmlDoc.async = false;
//     xmlDoc.load("books.xml");
// } catch (e) {
//     try //Firefox, Mozilla, Opera, etc.  
//     {
//         xmlDoc = document.implementation.createDocument("", "", null);
//         xmlDoc.async = false;
//         xmlDoc.load("books.xml");
//     } catch (e) {
//         try //Google Chrome  
//         {
//             var xmlhttp = new window.XMLHttpRequest();
//             xmlhttp.open("GET", "books.xml", false);
//             xmlhttp.send(null);
//             xmlDoc = xmlhttp.responseXML.documentElement;
//         } catch (e) {
//             error = e.message;
//         }
//     }
// }
// loadXML = function(xmlFile) {
//     var xmlDoc = null;
//     //判断浏览器的类型
//     //支持IE浏览器
//     if (!window.DOMParser && window.ActiveXObject) {
//         var xmlDomVersions = ['MSXML.2.DOMDocument.6.0', 'MSXML.2.DOMDocument.3.0', 'Microsoft.XMLDOM'];
//         for (var i = 0; i < xmlDomVersions.length; i++) {
//             try {
//                 xmlDoc = new ActiveXObject(xmlDomVersions[i]);
//                 break;
//             } catch (e) {}
//         }
//     }
//     //支持Mozilla浏览器
//     else if (document.implementation && document.implementation.createDocument) {
//         try {
//             /* document.implementation.createDocument('','',null); 方法的三个参数说明
//              * 第一个参数是包含文档所使用的命名空间URI的字符串； 
//              * 第二个参数是包含文档根元素名称的字符串； 
//              * 第三个参数是要创建的文档类型（也称为doctype）
//              */
//             xmlDoc = document.implementation.createDocument('', '', null);
//         } catch (e) {}
//     } else {
//         return null;
//     }

//     if (xmlDoc != null) {
//         xmlDoc.async = false;
//         xmlDoc.load("text.xml");
//     }
//     return xmlDoc;
// }
function loadXML(fileName) {
    try { //Internet Explorer    
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        //加载 XML文档,获取XML文档对象  
        xmlDoc.load(fileName);
    } catch (e) { //Firefox, Mozilla, Opera, etc.    
        try {
            xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.URL = fileName;
            xmlDoc.async = "false";
            //加载 XML文档,获取XML文档对象  
            xmlDoc.load(fileName);
        } catch (e) {
            try { //Google Chrome    
                var xmlHttp = new window.XMLHttpRequest();
                xmlHttp.open("get", fileName, false);
                xmlHttp.send(null);
                xmlDoc = xmlHttp.responseXML.documentElement;
            } catch (e) {
                alert("您的浏览器不能正常加载文件。请切换到兼容模式，或者更换浏览器");
            }
        }
    }
    console.log(xmlDoc);
    return xmlDoc;  
}
//兼容IE、FireFox、Chrome等浏览器的xml处理函数（selectSingleNode、     
// selectNodes）；selectSingleNode：根据XPath选择单个节点。selectNodes：根据XPath选择多个节点。  
window.onload = function(argument) {
    var xmldoc = loadXML("安络痛胶囊.xml");
    debugger
    var startNode = xmldoc.getElementsByTagName("Start");
    for (var i = 0; i < startNode.length; i++) {
       console.log(startNode[i])
       
    }
}
