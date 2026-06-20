function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"))
    const ebid = JSON.parse(sessionStorage.getItem("ebid"))
    return {token, ebid}
}

export async function getUser(){

    const browserData = getSession()

    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`}
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.ebid}`, requestOptions )
    if(!response.ok){
        throw new Error({message: response.statusText, status: response.status})
    }
    const data = await response.json()
    return data
}


export async function getUserOrders(){

    const browserData = getSession()

    const requestOptions = {
        method: "GET",
        headers: {"Content-Type": "Application/json", Authorization: `Bearer ${browserData.token}`} 
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.ebid}`, requestOptions )
    if(!response.ok){
        throw new Error({message: response.statusText, status: response.status})
    }
    const data = await response.json()
    return data
}


export async function createOrder(cartList, total, user){

    const browserData = getSession()

    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
            payment_id: "eb_"+Math.random().toString(36).substring(2,11) + Math.random().toString(36).substring(2,11)
        }
    }

    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browserData.token}`},
        body: JSON.stringify(order)
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions )
    if(!response.ok){
        throw new Error({message: response.statusText, status: response.status})
    }
    const data = await response.json()
    return data

}