let itemList=[]
function addItem(){
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

  //call loadTable function for items and code the function
  loadTable();

}

function loadTable(){
    //capture the table into a variable
    let itemTable = document.getElementById("itemsTable")

    //now whats gonna come inside the table element , first the header:
    let body=
    `
    <tr>
        <th>Item Name</th>
        <th>Category</th>
        <th>Qty</th>
        <th>Price</th>
    <tr>
    `

    //now using a for each loop to iterate and add elements inside and add 
    itemList.forEach(items => {
        //adding these to the body: inside the loop iteration
        body+=
        `
        <tr>
            <td>${items.itemName}</td>
            <td>${items.itemCategory}</td>
            <td>${items.itemQty}</td>
            <td>${items.itemPrice}</td>
        </tr>
        `
    });

    //testing to see if what we added is showing in body
    console.log(body)

    //now adding to the inner Html
    itemTable.innerHTML=body;

}