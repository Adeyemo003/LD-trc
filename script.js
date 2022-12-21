let myLeads = []

const btn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const inputEl = document.getElementById("input-el")

const deleteBtn = document.querySelector("#delete-btn")

const saveBtn = document.querySelector("#save-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// this is how the tabs template of chrome is constructed, the urls are objects stored in an array called tabs. so 
// literally they can be located by the array index
// const tabs = [
//   {url: "https://linkedin.com/in/adeyemo-opeyemi-374122243"}
// ]

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderList(myLeads)
  console.log(myLeads)
  console.log("let")
}
else {
  console.log("no")
}

saveBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderList(myLeads)
    console.log(tabs[0].url)
  })
})

function renderList(Leads) { 
  listItems = ""
  for (i=0; i<Leads.length; i++) {
    listItems += `
       <li>
           <a target='_blank' href='${Leads[i]}'> ${Leads[i]} </a>
       </li>
   `
}

 ulEl.innerHTML = listItems 
}


deleteBtn.addEventListener("click", function() {
  myLeads = []
  localStorage.clear()
  ulEl.innerHTML = ""
  renderList(myLeads)
  console.log("gone")
})

btn.addEventListener("click" , function() { 
   myLeads.push(inputEl.value)
   console.log(myLeads);
   inputEl.value = ""
   localStorage.setItem("myLeads", JSON.stringify(myLeads))
   console.log(localStorage.getItem("myLeads"))
   renderList(myLeads)
})
