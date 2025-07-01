import { useContext } from "react"
import { Form} from "react-bootstrap"
import { FilterContext } from "../provider/context"

const checks = ["All", "chick", "meat", "vegan", "spicy"]

function Filter() {
    const {setSearch, setFilter, filter} = useContext(FilterContext)

    return (
        <div className="py-3">
                {checks.map((p, i) => (
                   <Form.Check
                        key={i}
                        inline
                        label={p}
                        name="g1"
                        type="radio"
                        checked={p == filter}
                        onChange={() => setFilter(p)}
                    />
                ))}                
                <Form.Control onInput={e => setSearch(e.target.value)} placeholder="Axtar..." />
        </div>
    )
}

export default Filter