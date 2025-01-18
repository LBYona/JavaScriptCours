const tabsTitles = document.getElementsByClassName("tab") //relier Java à des éléments HTML/CSS
const tabsContents = document.getElementsByClassName("intro") //relier Java à des éléments HTML/CSS

for (let i = 0; i < tabsTitles.length; i++) { //donner les conditions des variables
  tabsTitles[i].addEventListener("click", () => {
    for (let j = 0; j < tabsTitles.length; j++){ //donner les conditions des variables
      tabsTitles[j].classList.remove("active") //permet de voir les tabs une par une
      tabsContents[j].classList.remove("active")
    }
    tabsTitles[i].classList.add("active")
    tabsContents[i].classList.add("active")
  })
}