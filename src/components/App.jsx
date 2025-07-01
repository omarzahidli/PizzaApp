import { useEffect, useReducer, useState } from "react"
import { Outlet} from "react-router"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"
import Basket from "./Basket"
import {size, pizza} from "../provider/data"
import basketReducer from "../provider/basketReducer"
import { DataContext, FilterContext, HandlerContext } from "../provider/context"

function App() {
  const [basket, dispatchBasket] = useReducer(basketReducer, sessionStorage["basket"] ? JSON.parse(sessionStorage["basket"]) : [])
  const [show, setShow] = useState(false)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const checkFilter = array => filter == 'All' ? array : array.filter(item => item.prop.includes(filter))
  const searchFilter = array => search == '' ? array : array.filter(item => item.name.toLowerCase().includes(search.toLocaleLowerCase()))

  useEffect(() => {
    sessionStorage.setItem("basket", JSON.stringify(basket))
  },  [basket])

  return (
    <DataContext value={{pizza, size, basket, show, setShow}}>
      <HandlerContext value={{dispatchBasket}}>
        <FilterContext value={{filter, setFilter, setSearch}}>

          <Header />
          <Container className="p-5 mt-5">
            <Outlet context={searchFilter(checkFilter(pizza))} />
          </Container>
          <Footer />
          <Basket />

        </FilterContext>
      </HandlerContext>
    </DataContext>
  )
}

export default App
