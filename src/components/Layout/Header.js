import './Header.css'

import HeaderCart from './HeaderCart'

function Header(props) {
    return (
        <>
            <header className='header'>
                <h1>
                    ParakhOnline
                </h1>
                <HeaderCart/>
            </header>
        </>

    )
}

export default Header