import './index.css'

const TabItems = props => {
  const {tabs, selectTab, isActive} = props
  const {displayText, optionId} = tabs

  const onSelect = () => {
    selectTab(optionId)
  }
  const tabBtn = isActive ? 'active-tab-btn' : 'tab-btn'
  return (
    <li>
      <button className={tabBtn} type="button" onClick={onSelect}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
