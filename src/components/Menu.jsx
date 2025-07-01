import { useOutletContext } from "react-router"
import { Col, Row } from "react-bootstrap"
import Item from "./Item"

function Menu() {
    const pizza = useOutletContext()
    
    return (
        <>
            <Row xs={1} md={2} xl={4} className="g-4">
                {pizza.map(item => (
                    <Col key={item.id}>
                        <Item {...item} className="h-max w-max" />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Menu