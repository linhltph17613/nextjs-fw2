import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <ul className="menu">
        <li>
          <Link href="/">
            <a className="menu__item">Home Page</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/detail">
            <a className="menu__item">Blog Page</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a className="menu__item">Product Page</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="menu__item">Contact Page</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header