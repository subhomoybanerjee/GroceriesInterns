import './HeaderCart.css'

import { useContext } from 'react'
import CartContext from '../../Store/cart-context'


function HeaderCart(props) {


    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    return (
        <div className='cartbut'>

            <span >Your Cart</span>
            <span className='badge'>
                {numberOfCartItems}
            </span>

        </div>


    )
}

export default HeaderCart