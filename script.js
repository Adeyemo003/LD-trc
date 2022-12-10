let myLeads = []

const btn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const inputEl = document.getElementById("input-el")

const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderList()
  console.log(myLeads)
  console.log("let")
}
else {
  console.log("no")
}

deleteBtn.addEventListener("click", function() {
  myLeads = []
  localStorage.clear()
  ulEl.innerHTML = ""
  renderList()
  console.log("gone")
})

btn.addEventListener("click" , function() { 
   myLeads.push(inputEl.value)
   console.log(myLeads);
   inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   console.log(localStorage.getItem("myLeads"))
   renderList()
})

function renderList() { 
   listItems = ""
   for (i=0; i<myLeads.length; i++) {
     listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
        </li>
    `
}

  ulEl.innerHTML = listItems 
}
