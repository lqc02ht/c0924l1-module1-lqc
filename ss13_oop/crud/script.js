class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
let product1 = new Product('p-001', 'iPhone', 2150);
let product2 = new Product('p-002', 'Samsung', 1980);
let product3 = new Product('p-003', 'Huawei', 1400);
let productList = [product1, product2, product3];
display();
function display() {
    let tableProduct = 
    `<table border="1" style="border-collapse: collapse;text-align: center">
        <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Chỉnh sửa</th>
            <th>Xoá</th>
        </tr>`;
    for(let i = 0; i < productList.length; i++) {
        tableProduct += 
        `<tr>
            <td>${i + 1}</td>
            <td>${productList[i].id}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td><button onclick="editProduct(${i})">Edit</button></td>
            <td><button onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`;
    }
    tableProduct += `</table><br>
    Số lượng sản phẩm đang có: ${productList.length}`;
    document.getElementById("display").innerHTML = tableProduct;
}
function addProduct() {
    let newId = document.getElementById('code').value;
    let newName = document.getElementById('name').value;
    let newPrice = document.getElementById('price').value;
    if (newId === '' || newName === '' || isNaN(newPrice)) {
        alert('Bạn phải nhập đầy đủ thông tin!');
    } else {
        let newProduct = new Product(newId, newName, newPrice);
        productList.push(newProduct);
        display();
        document.getElementById('code').value = '';
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
    }
}
function editProduct(index) {
    let updId = prompt('Nhập mã sản phẩm mới:');
    let updName = prompt('Nhập tên sản phẩm mới:');
    let updPrice = prompt('Nhập giá sản phẩm mới:');
    let updProduct = new Product(updId, updName, updPrice);
    productList[index] = updProduct;
    display();
}
function deleteProduct(index) {
    let conf = confirm(`Bạn có muốn xoá sản phẩm ${productList[index].name} không?`);
    if(conf) {
        productList.splice(index, 1);
    }
    display();
}