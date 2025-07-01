import { useContext, useState } from "react"
import { Button, Card, Form, InputGroup } from "react-bootstrap"
import { DataContext, HandlerContext } from "../provider/context"

function Item({id, name, img, price, desc}) {
    const {dispatchBasket} = useContext(HandlerContext)
    const {size, setShow} = useContext(DataContext)
    const [olcu, setOlcu] = useState(Object.keys(price)[0])
    const [quant, setQuant] = useState(1)
    let path = './assets/img/'

    return (
        <Card className="h-100">
            <Card.Img src={img} variant="top" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="text-truncate">{desc}</Card.Text>
                <Form.Select onChange={e => setOlcu(e.target.value)} aria-label="pizza size">
                    {Object.keys(price).map(s => <option key={s} value={s}>{size[s]}</option>)}
                </Form.Select>
                <div className="d-flex space-between py-3">
                    <InputGroup className="mb-3">
                        <Button onClick={() => setQuant(quant > 1 ? quant - 1 : 1)} variant="outline-secondary"> - </Button>
                        <span className="py-2 px-3"> {quant} </span>
                        <Button onClick={() => setQuant(quant + 1)} variant="outline-secondary"> + </Button>
                    </InputGroup>
                    <h3>{+quant * +price[olcu]}₼</h3>
                </div>
                 <div className="d-grid gap-2">
                    <Button onClick={() => {
                                        dispatchBasket({type: 'add', payload: {id, olcu, quant}})
                                        setShow(true)
                                    }} variant="warning">Səbətə At</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item