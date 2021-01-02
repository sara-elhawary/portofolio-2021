console.log('hello first')
//Down arrow function
const arrowSpan = document.getElementById('arrow-span')
arrowSpan.addEventListener('click', goDown)
function goDown() {
  const sections = document.querySelectorAll('section')
  console.log(sections[0])
}

function activeLinkFunction() {
  // console.log('hello')
  const navLinks = document.querySelectorAll('.nav__link')
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const activeLink = document.querySelector('.nav__link.active')
      if (activeLink) {
        activeLink.classList.remove('active')
      }
      const currentLink = event.target
      console.log(currentLink)
      currentLink.classList.add('active')
      console.log(navLinks)
    })
  })
}

function hideDownArrow() {
  const arrowSpan = document.getElementById('arrow-span')

  const contactSection = document.getElementById('contact')
  const activeFlag = contactSection.classList.contains('active')
  if (activeFlag) {
    arrowSpan.classList.add('hidden')
    console.log(arrowSpan)
    // console.log(downArrow)
  }
}

function main() {
  activeLinkFunction()
  hideDownArrow()
}
main()
