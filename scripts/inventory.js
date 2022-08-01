var data_arr=JSON.parse(localStorage.getItem("products")) || [];
function append(){
var container=document.getElementById("all_products")

data_arr.forEach(function(elem,index){
    let img=document.createElement("img");
    img.src=elem.image;

    let para2=document.createElement("p");
    para2.innerText=elem.type;

    let para3=document.createElement("p");
    para3.innerText=elem.price;

    let para1=document.createElement("p");
    para1=innerText=elem.desc;

    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.addEventListener("click",function(){remove(index)})

    let div=document.createElement("div");
    
    div.append(img,para1,para2,para3,btn);
    container.append(div);

})
}
append();

function remove(index){;
    var data_arr=JSON.parse(localStorage.getItem("products")) || [];
    
    var new_arr=data_arr.filter(function(elem,i){
        if(i === index){
            let trash=JSON.parse(localStorage.getItem("trash")) ||[];
            trash.push(elem);
            localStorage.setItem("trash",JSON.stringify(trash))
        }
        else{
            return i !== index;
        }
    })
    localStorage.setItem("products",JSON.stringify(new_arr))
    append();
    console.log(new_arr)
    // console.log(index);
}