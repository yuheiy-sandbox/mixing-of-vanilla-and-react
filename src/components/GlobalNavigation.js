const attachComponent = (rootEl) => {
  const toggleEl = rootEl.querySelector('.GlobalNavigation__toggle')
  const menuEl = rootEl.querySelector('.GlobalNavigation__menu')
  let isExpanded = false
  toggleEl.addEventListener('click', () => {
    if (isExpanded) {
      menuEl.hidden = true
      toggleEl.setAttribute('aria-expanded', 'true')
    } else {
      menuEl.hidden = false
      toggleEl.setAttribute('aria-expanded', 'false')
    }
    isExpanded = !isExpanded
  })
}

export const init = (rootEls = document.querySelectorAll('.GlobalNavigation')) => {
  rootEls.forEach(attachComponent)
}
