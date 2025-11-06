// let dataExists = JSON.parse(localStorage.getItem("itemObjArray"));
let itemList = [];
// if (dataExists!=null) {
//     let itemList = [itemList.push(dataExists)];
// } 

function addItem() {
  //capture all from fields and store in vars
  let itemName = document.getElementById("txtItem").value;
  let category = document.getElementById("txtCategory").value;
  let qty = document.getElementById("txtqty").value;
  let price = document.getElementById("txtprice").value;

  //test if properly captured
  console.log(itemName + " " + category + " " + qty + " " + price);

  //store the captured fields into an item object
  let item = {
    itemName: itemName,
    itemCategory: category,
    itemQty: qty,
    itemPrice: price,
  };

  //add the object into the list
  itemList.push(item);

  //test if array is showing
  console.log(itemList);

  //fire sweetalert if add success
  Swal.fire({
    title: "Success!",
    text: "Item Added",
    icon: "success",
    confirmButtonText: "okay",
  });

  //storing in local storage:
  //   localStorage.setItem("itemCode","item0001")

  //Item object making string:
  //   localStorage.setItem("itemObject",JSON.stringify(item))
  localStorage.setItem("itemObjArray", JSON.stringify(itemList));
  let object = localStorage.getItem("itemObjArray");
  alert(object);

  //call loadTable function for items and code the function
  loadTable();
}

function loadTable() {
  //capture the table into a variable
  let itemTable = document.getElementById("itemsTable");

  //now whats gonna come inside the table element , first the header:
  let body = `
    <tr>
        <th>Item Name</th>
        <th>Category</th>
        <th>Qty</th>
        <th>Price</th>
    <tr>
    `;

  let localStoreItemList = localStorage.getItem("itemObjArray");
  console.log(JSON.parse(localStoreItemList));

    let localItem = JSON.parse(localStoreItemList) //JSON.parse(localStorage.getItem("itemObjArray");)

  //now using a for each loop to iterate and add elements inside and add
  localItem.forEach((items) => {
    //adding these to the body: inside the loop iteration
    body += `
        <tr>
            <td>${items.itemName}</td>
            <td>${items.itemCategory}</td>
            <td>${items.itemQty}</td>
            <td>${items.itemPrice}</td>
        </tr>
        `;
  });

  //testing to see if what we added is showing in body
  console.log(body);

  //now adding to the inner Html
  itemTable.innerHTML = body;
}
