var dashboardData = JSON.parse(window.localStorage.getItem("myRegisterData")) || [];
// console.log("dashboardData:", dashboardData);

const otpform = document.querySelector(".otpform");
const form = document.querySelector(".form");
const digit = document.getElementById("digit-1");
const container = document.querySelector("tbody");
const sort = document.getElementById("sort")



let login = {
  Unique_id: 123,
  Name: "Anurag",
  email: "a@gmail.com",
  pass: 123,
}


display(dashboardData);

function display(ele) {

  ele.map((e) => {
    // console.log(e.Designation);

    let table = document.createElement("tr");

    let unique = document.createElement("td");
    unique.innerHTML = e.Unique_id;

    let name = document.createElement("td");
    name.innerHTML = e.Name;

    let email = document.createElement("td");
    email.innerHTML = e.email;

    let pass = document.createElement("td");
    pass.innerHTML = e.pass;

    // let age = document.createElement("td");
    // age.innerHTML = e.Age;

    // let designation = document.createElement("td");
    // designation.innerHTML = e.Designation;

    // let priority = document.createElement("td");
    // priority.innerHTML = e.Priority;

    // let vaccine = document.createElement("td");
    // vaccine.innerHTML = e.Vaccine;



    let deletetd = document.createElement("td");
    let deletebtn = document.createElement("button")
    deletebtn.innerText = "Delete"
    deletebtn.style.color = "red"
    deletetd.appendChild(deletebtn)

    let cartitems = document.createElement("td");
    let cartitembtn = document.createElement("button")
    cartitembtn.innerText = "Go to cart"
    cartitembtn.style.color = "green"
    cartitems.appendChild(cartitembtn)

    deletebtn.addEventListener("click", () => {
      // console.log(e.otp)
      let dashboard = JSON.parse(window.localStorage.getItem("myRegisterData")) || []

      let newdata = dashboard.filter(elem => elem.Unique_id != e.Unique_id)
      console.log(newdata)
      localStorage.setItem("myRegisterData", JSON.stringify(newdata));
      container.innerHTML = null
      display(newdata)

    })

    cartitembtn.addEventListener("click", () => {
      let torender = JSON.parse(window.localStorage.getItem(`${e.Unique_id}`)) || []
      localStorage.setItem("torender", JSON.stringify(torender))
      window.location.href = "./cart.html"
    })

    table.append(unique, name, email, pass, cartitems, deletetd);
    container.append(table);
  });
}


// function register(e) {
//   console.log(otpform)
//   otpform.style.opacity = 1

//   form.addEventListener("submit", (ex) => {
//     ex.preventDefault()

//     if (digit.value == e.otp) {
//       otpform.style.opacity = 0

//       alert(`${e.Name} added to queue`)

//       setTimeout(() => {
//         alert(`Vaccinating ${e.Vaccine}`)
//       }, 5000)

//       setTimeout(() => {
//         alert(`${e.Name} vaccinated`)
//         let vaccination = JSON.parse(window.localStorage.getItem("myVaccinationData")) || []
//         vaccination.push(e)
//         localStorage.setItem("myVaccinationData", JSON.stringify(vaccination));

//         let dashboard = JSON.parse(window.localStorage.getItem("myRegisterData")) || []
//         let newdata = dashboard.filter(elem => elem.Unique_id != e.Unique_id)
//         console.log(newdata)
//         localStorage.setItem("myRegisterData", JSON.stringify(newdata));
//         container.innerHTML = null
//         display(newdata)


//       }, 10000)
//     }
//   })

// }

// sort.addEventListener("change", (e) => {
//   console.log(e.target.value)

//   container.innerHTML = null
//   // console.log(dashboardData)
//   let vaccination = JSON.parse(window.localStorage.getItem("myRegisterData")) || []
//   console.log(vaccination)
//   vaccination.sort((a, b) => {
//     // console.log(a, b)

//     if (a[e.target.value] < b[e.target.value])
//       return -1
//     if (a[e.target.value] > b[e.target.value])
//       return 1
//     else
//       return 0
//   })

//   display(vaccination);

// })
