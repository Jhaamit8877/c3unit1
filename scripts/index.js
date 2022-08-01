//store the products array in localstorage as "products"
var data_arr=JSON.parse(localStorage.getItem("products")) || [];
function storeData(){
    event.preventDefault();

    type=products.type.value;
    desc=products.desc.value;
    price=products.price.value;
    image=products.image.value;

    let data =new productsData(type,desc,price,image)
    console.log(data);
    data_arr.push(data);
    console.log(data_arr);
    localStorage.setItem("products",JSON.stringify(data_arr))
    console.log("Inside function");
}


function productsData(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
