let xhr = new XMLHttpRequest();//create object
xhr.open("GET","http://----",true);
xhr.onload=function(){
    if(xhr.status==200){
        console.log(xhr.responseText);
    }
    else{
        console.log(xhr.status);
    }
};
xhr.send();