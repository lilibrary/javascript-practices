   window.onload = function(){
          eventHandler(document.getElementById('div'),'contextmenu',function(event){
                 // event = event || window.event;
                 event.preventDefault?(event.preventDefault()):(event.returnValue = false);
                 var menu = document.getElementById('myContextMenu'),
                 pageX = event.pageX?event.pageX:(event.clientX+(document.body.scrollLeft||document.documentElement.scrollLeft)),
                 pageY = event.pageY?event.pageY:(event.clientY+(document.body.scrollTop||document.documentElement.scrollTop));
                 menu.style.left = pageX+'px';
                 menu.style.top = pageY+'px';
                 menu.style.visibility = 'visible';
             });
             eventHandler(document,'click',function(event){
                 document.getElementById('myContextMenu').style.visibility = 'hidden';
             })
         }
         function eventHandler(dom,type,fn){
         	dom.addEventListener(type,fn);
         }
         
        document.addEventListener("contextmenu", function(event) {
        console.log(11);
        event.preventDefault();//阻止事件默认行为
        console.log(event.pageX);
        console.log(event.pageY);
		})
        // function eventHandler(dom,type,fn){
        //      if(typeof dom.addEventListener != 'undefined'){
        //          dom.addEventListener(type,fn,false);
        //      }else if(typeof dom.attachEvent != 'undefined'){
        //          dom.attachEvent('on'+type,fn);
        //      }else{
        //          dom['on'+type] = fn;
        //      }
        //  }


/**
 * Created by sks on 2016/12/22.
 */

// (function(){
//     var div = document.getElementById("div");
//     //contextmenu 事件是我们鼠标右击事件
//     document.addEventListener("contextmenu", function(event) {
//         console.log(11);
//         event.preventDefault();//阻止事件默认行为
//         console.log(event.pageX);
//         console.log(event.pageY);
//     })
// })()


// window.onload = function() {
//             document.oncontextmenu = block;
//             document.body.onmouseup = function(event) {
//                 if (!event) event = window.event;
//                 if (event.button == 2) {
//                     var x = event.pageX || event.clientX;
//                     var y = event.pageY || event.clientY;
//                     document.getElementById("contextMenu").style.left = x   "100px";
//                     document.getElementById("contextMenu").style.top = y   "100px";
//                     document.getElementById("contextMenu").style.display = "block";
//                 }
//             }
//             //阻止事件冒泡
//             document.getElementById("contextMenu").onclick = function(event) {
//                 event.stopPropagation();
//             }
//             //点击其他地方隐藏
//             document.onclick = function() {
//                 document.getElementById("contextMenu").style.display = "none";
//             }
//             for (var i = 0; i < getElementsByClassName("contextMenuItem").length; i  ) {
 
//                 getElementsByClassName("contextMenuItem")[i].onclick = function(event) {
//                     event = event ? event : window.event
//                     var target = event.srcElement ? event.srcElement : event.targe;
//                     document.getElementById("contextMenu").style.display = "none";
//                     //alert("您点击了： "   target.innerHTML);
                     
//                 }
//             }
 
//         }
          
//         function block(event) {
//             if (window.event) {
//                 event = window.event;
//                 event.returnValue = false;
//             } else event.preventDefault();
//         }


