import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navData from './menuData'
function LevelOneTitle(props) {
  return <h1 className="level-one-title">{props.text}</h1>
}
function LevelTwoTitle(props) {
  return (
    <h2
      className={'level-two-title ' + props.className}
      onClick={props.onClick}
    >
      <Link to={props.to}>{props.text}</Link>
    </h2>
  )
}
interface GroupMenuProps {
  totalTitle: string
  data: MenuData[]
}
interface MenuData {
  name: string
  path: string
}
function GroupMenu(props: GroupMenuProps) {
  const [currentMenu, setMenu] = useState('/button')
  return (
    <div>
      <LevelOneTitle text={props.totalTitle} />
      {props.data.map(item => {
        return (
          <LevelTwoTitle
            text={item.name}
            to={item.path}
            key={item.path}
            className={item.path === currentMenu ? 'nav-active' : ''}
            onClick={() => {
              setMenu(item.path)
            }}
          />
        )
      })}
    </div>
  )
}
function SideNav() {
  return (
    <nav className="demo-nav">
      {navData.map(item => {
        return (
          <GroupMenu
            totalTitle={item.totalTitle}
            data={item.data}
            key={item.totalTitle}
          />
        )
      })}
    </nav>
  )
}

export default SideNav
