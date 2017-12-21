import React from 'react'

const Disclosure = ({ heading, children, isExpanded, onToggle }) => {
  const onClick = () => onToggle(!isExpanded)
  return (
    <div className="Disclosure">
      <h2 className="Disclosure__heading">
        <button
          className="Disclosure__trigger"
          type="button"
          aria-expanded={String(isExpanded)}
          onClick={onClick}
        >
          {heading}
        </button>
      </h2>
      {children instanceof React.Element ? (
        <div className="Disclosure__content" hidden={!isExpanded}>
          {children}
        </div>
      ) : (
        <div
          className="Disclosure__content"
          hidden={!isExpanded}
          dangerouslySetInnerHTML={{ __html: children }}
        />
      )}
    </div>
  )
}

export default Disclosure
