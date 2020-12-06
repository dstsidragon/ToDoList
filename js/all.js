


//指定DOM元素

var addMemo = document.querySelector('.addMemo');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('listData')) || [];
 /*宣告data等於localStorage裡面listData的值 若沒有就代空值 */

//監聽與更新

addMemo.addEventListener('click',addData,false);
list.addEventListener('click',deleteData,false);
updataList(data);


//加入列表，並同步更新網頁與localStorage
function addData(e) {
    e.preventDefault();
    var txt = document.querySelector('.textClass').value;
    var todo = {
        content:txt
    };
    data.push(todo);
    
    localStorage.setItem('listData',JSON.stringify(data));
    updataList(data);
}


//更新網頁內容
function updataList(items){
    str = "";
    var len = items.length;
    for(var i=0;i<len;i++){
       
        str+='<li><a href="*" data-num='+i+'>刪除</a><span>'+items[i].content+'</span></li>';
    }
    list.innerHTML=str;
}


//刪除待辦事項
function deleteData(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return}
    var num = e.target.dataset.num;
    data.splice(num,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updataList(data);

}