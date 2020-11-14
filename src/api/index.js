export const getAdmin = (username, password) => {
    let address = 'tranhanam1999hn@gmail.com'
    let admin = {
        username,password,address
    }
    return fetch('http://localhost:4000/user/getAdmin', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(admin)
    })
    .then(res => {
        return res.json().then(value => {
            return value
        })
    })
}
export const getAllBook = async () => {
    let res = await fetch('http://localhost:4000/prod/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export const getAllUser = async () => {
    let res = await fetch('http://localhost:4000/user/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export const getAllTrans = async () => {
    let res = await fetch('http://localhost:4000/trans/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    let value = await res.json()
    return value
}
export default {getAdmin,getAllBook,getAllUser,getAllTrans}