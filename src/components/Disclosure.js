import React from 'react'
import ReactDOM from 'react-dom'
import { Value } from 'react-value'
import Disclosure from './react/Disclosure'

const attachComponent = (containerEl) => {
  const initialExpanded = containerEl.dataset.open === 'true'
  const heading = containerEl.dataset.heading
  const contentRawHtml = containerEl.innerHTML
  ReactDOM.render(
    <Value
      defaultValue={initialExpanded}
      render={(value, onChange) => (
        <Disclosure
          isExpanded={value}
          heading={heading}
          contentRawHtml={contentRawHtml}
          onToggle={onChange}
        />
      )}
    />,
    containerEl,
  )
}

export const init = (containerEls = document.querySelectorAll('.react-Disclosure')) => {
  containerEls.forEach(attachComponent)
}
