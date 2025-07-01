import { useContext } from "react"
import { Button, Modal, Table } from "react-bootstrap"
import { FaRegTrashAlt } from "react-icons/fa"
import { DataContext, HandlerContext } from "../provider/context"


function Basket() {
  const {dispatchBasket} = useContext(HandlerContext)
  const {basket, pizza, show, setShow} = useContext(DataContext)

  return (
     <Modal show={show} onHide={() => setShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sifariş</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Məhsullar:</h4>
         <Table striped bordered hover size="sm">
            <thead>
                {basket.length ? 
                  (
                    <tr>
                      <th>#</th>
                      <th>Şəkil</th>
                      <th>Adı</th>
                      <th>Ölçü</th>
                      <th>Qiymət</th>
                      <th>Say</th>
                      <th>Məbləğ</th>
                      <th>Əməlliyat</th>
                    </tr>
                  )
                  : (<h5 className="text-center warning">Səbət Boşdur!</h5>)
                }
            </thead>
            <tbody>
                {basket?.map((item, i) => {
                    let p = pizza.find(elm => elm.id === item.id) 
                    if (p == undefined) return '' 
                    return (<tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                            <img src={p.img} alt={p.name} className="img-thumb" />
                        </td>
                        <td>{p.name}</td>
                        <td>{item.size}</td>
                        <td>{p.price[item.size]}₼</td>
                        <td>
                            <Button onClick={() => dispatchBasket({type: 'upd', payload: {i, quant: item.quant - 1}})} variant="outline-danger" size="sm">-</Button>
                            <span className="px-2">{item.quant}</span>
                            <Button onClick={() => dispatchBasket({type: 'upd', payload: {i, quant: item.quant + 1}})} variant="outline-danger" size="sm">+</Button>
                        </td>
                        <td>{item.quant * p.price[item.size]}₼</td>
                        <td>
                            <FaRegTrashAlt onClick={() => dispatchBasket({type: 'del', payload: {i}})} />
                        </td>
                    </tr>)
                    }
                )}
            </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setShow(false)}>Bağla</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Basket