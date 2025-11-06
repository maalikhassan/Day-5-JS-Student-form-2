let customerlist=[]
function addCustomer(){
    let name = document.getElementById("txtName").value ;
    let email = document.getElementById("txtEmail").value ;
    let phone = document.getElementById("txtPhone").value ;

    console.log(name +" "+ email+" "+ phone);

    // document.getElementById("printValues").innerText=
    // `Name : ${name} `+
    // `\n Email : ${email} `+
    // `\n Phone : ${phone}`;

    customer={
        name: name,
        email: email,
        phone: phone
    };

    customerlist.push(customer)

    console.log(customer)

    Swal.fire({
  title: 'Success!',
  text: 'Customer Added',
  icon: 'success',
  confirmButtonText: 'okay'
})

loadTable()

}

function loadTable() {

    let customerTable=document.getElementById("customerTable")
    
    let body = `
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
    </tr>
    
    `;

    customerlist.forEach(customers => {
        body+=
        `
        <tr>
            <td>${customers.name}</td>
            <td>${customers.email}</td>
            <td>${customers.phone}</td>
        </tr>
        `
    });

    console.log(body)

    customerTable.innerHTML=body;
}