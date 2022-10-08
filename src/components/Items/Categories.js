import Cards from "../UI/Cards";
import CategoriesItems from "./CategoriesItems";
import './Categories.css'


function Categories(props) {

    const items = props.data.productList

    // console.log(items)

    return (
        <Cards className="spacing">
            <section>
                <h3>
                    {props.data.name}
                </h3>
                
                <div className="line">
                </div>
                
                <ul>
                    {
                        items.map(data => (
                            <CategoriesItems
                                key={data.name}
                                id={data.name}
                                name={data.name}
                                price={data.price}
                            />
                        ))
                    }
                </ul>

            </section>
        </Cards>

    )

}

export default Categories