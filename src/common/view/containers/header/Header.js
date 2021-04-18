import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Header = props => {
    return (
        <header>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about-us">
                    <a>About us</a>
                </Link>
                <Link href="/login">
                    <a>
                        login
                   </a>
                </Link>
            </nav>
        </header>);

}

Header.propTypes = {

}

export default Header;
