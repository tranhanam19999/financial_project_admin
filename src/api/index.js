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
export const deleteBook = async (item) => {
    console.log('im delete item ', item)
    let res = await fetch('http://localhost:4000/prod/deleteBook', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateBook = async (item) => {
    let res = await fetch('http://localhost:4000/prod/updateBook', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
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
export const deleteUser = async (item) => {
    let res = await fetch('http://localhost:4000/user/deleteUser', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateUser = async (item) => {
    let res = await fetch('http://localhost:4000/user/updateUser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
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
export const deleteTran = async (item) => {
    let res = await fetch('http://localhost:4000/tran/deleteTran', {
        method:'delete',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res
}
export const updateTran = async (item) => {
    let res = await fetch('http://localhost:4000/user/updateUser', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
}
export const getAllTrans = async () => {
    let res = await fetch('http://localhost:4000/tran/getAll', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    console.log('im res ', res)
    let value = await res.json()
    return value
}
export const approveTran = async (item) => {
    let res = await fetch('http://localhost:4000/tran/approveTran', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    return res 
}
export default {getAdmin,approveTran,
                getAllTrans,updateTran,deleteTran,
                getAllBook,updateBook,deleteBook,
                getAllUser,deleteUser,updateUser}