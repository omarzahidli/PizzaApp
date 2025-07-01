function basketReducer(basket, action) {
  const {type, payload} = action
  return type == 'add' ? add2Basket(basket, payload.id, payload.olcu, payload.quant) :
         type == 'del' ? deleteFromBasket(basket, payload.i) : 
                         updateBasket(basket, payload.i, payload.quant)
}

function add2Basket(basket, id, size, quant) {
    let ind = basket.findIndex(item => item.id == id && item.size == size)
    if(ind == -1) return [...basket, {id, size, quant}]
    else return updateBasket(basket, ind, basket[ind].quant + quant)
}

function deleteFromBasket(basket, ind) {
    return basket.filter((_, i) => i != ind)
}

function updateBasket(basket, ind, quant) {
    if(quant == 0) return deleteFromBasket(basket, ind)
    else {
        let obj = {...basket[ind]}
        obj.quant = quant
        return basket.map((item, i) => i == ind ? obj : item)
    }
}

export default basketReducer