import { useContext} from "react";
import CartContext from "../../Store/cart-context";
import Cards from "../UI/Cards";
import './CategoriesItems.css';


function CategoriesItems(props){

    const cartCtx=useContext(CartContext)

    function add(){
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:1,
            price:props.price
        })
    }

    function remove(){
        cartCtx.removeItem(props.id)
    }


    return(
        
        <Cards className="side">
            <h3>name: {props.name}</h3>
            <h4>price: {props.price}</h4>
            <button onClick={add}>Add to cart</button>
            <button onClick={remove}>Remove from cart</button>
        </Cards>

    )
}

export default CategoriesItems