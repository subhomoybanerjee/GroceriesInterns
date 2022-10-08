import { groc } from "./database"
import './AvailableGrocs.css'
import Categories from "./Categories"

function AvailableGrocs() {
    const temp2 = groc

    const data = temp2.data

    return (
       
        <div className="mealsss">
            <ul>
                {
                    data.map(data => (
                        <Categories
                            key={Math.random()}
                            data={data}
                        />
                    ))
                }
            </ul>
        </div>

    )
}

export default AvailableGrocs