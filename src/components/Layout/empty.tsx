import React, { Children } from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const LayoutEmpty = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default LayoutEmpty