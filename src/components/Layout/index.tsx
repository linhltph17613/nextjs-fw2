import React from 'react'
import { LayoutProps } from '../../models/layout'
import Header from '../Header'

type Props = {}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Header></Header>
        {children}
    </div>
  )
}

export default Layout