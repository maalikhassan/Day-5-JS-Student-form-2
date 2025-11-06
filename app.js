
function addCustomer(){


    let name = document.getElementById("txtName").value ;
    let email = document.getElementById("txtEmail").value ;
    let phone = document.getElementById("txtPhone").value ;

    console.log(name +" "+ email+" "+ phone);

    document.getElementById("printValues").innerText=
    `Name : ${name} `+
    `\n Email : ${email} `+
    `\n Phone : ${phone}`;

    customer={
        name: name,
        email: email,
        phone: phone
    };

    let customerlist=[]

    customerlist.push(customer)

    console.log(customer)

    Swal.fire({
  title: 'Success!',
  text: 'Customer Added',
  icon: 'success',
  confirmButtonText: 'okay'
})


}