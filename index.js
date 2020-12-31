console.log('hello first')

function activeLinkFunction() {
  console.log('hello')
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
  const downArrow = document.querySelector('.arrow')
  console.log(downArrow)
  const contactSection = document.getElementById('contact')
  const activeFlag = contactSection.classList.contains('active')
  if (activeFlag) {
    downArrow.classList.add('hidden')
    downArrow.classList.add('border')
    console.log(downArrow)
  }
}

function main() {
  activeLinkFunction()
  hideDownArrow()
}
main()
