import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleSheet } from 'elementum'

const styles = StyleSheet.create({
  default: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: '"Maven Pro", sans-serif',
    color: '#000000',
    textDecoration: 'none',
    borderColor: '#ffffff',
    borderLeft: '5px solid #ffffff',
    fontSize: '16px',
    fontWeight: '700',
    width: '320px',
    height: '64px',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    transition: 'all 0.2s',
    '& svg': {
      marginRight: '16px',
    },
  },
  active: {
    borderColor: '#E31D1A',
    color: '#E31D1A',
    '& svg': {
      fill: '#E31D1A',
    },
  },
  minimized: {
    width: '88px',
    paddingLeft: '5px',
    justifyContent: 'center',
  },
})

const Item = ({ minimized, to, exact, icon, children, onClick }) => (
  <NavLink
    to={to}
    exact={exact}
    className={styles({ default: true, minimized })}
    activeClassName={styles({ active: true, minimized })}
    onClick={onClick}
  >
    {icon}
    {minimized ? null : children}
  </NavLink>
)

export default Item
