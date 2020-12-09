import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import {createBook} from '../../../store/listbook'
import { useDispatch } from 'react-redux'
import {storage} from '../../../firebase/firebase'
const CreateBook = (props) => {
    const dispatch = useDispatch()
    const [newBook,setNewBook] = useState()
    const [imgUser,setImgUser] = useState()
    useEffect(() => {
        setNewBook({
            name: '',
            info: {
                description: '',
                category: '',
                publisher: '',
                yearPublished: '',
                author: '',
                language: '',
                numberOfPage: ''
            },
            link: {
                demo: '',
                full: '',
            },
            price: '',
            pictures: '',
            sale: ''
        })
    },[])
    const getInputImages = async (e) => {
        let reader = new FileReader()
        if(e.target.files[0]) {
            reader.onload = () => {
                let output = document.getElementsByClassName("carousel-item")[0].getElementsByClassName("d-block w-100")[0]
                output.src = reader.result
            }
            reader.readAsDataURL(e.target.files[0])
            return e.target.files[0]
        }
    }
    const uploadImages = async e => {
        let inputImg = await getInputImages(e)
        setImgUser(inputImg)
    }
    const getDownloadImageURLs = async (val,id, folder) => {
        const image = val
        const storageRef = storage.ref(`/${folder}/${id}`)
        const uploadTask = storageRef.put(image)
        const url = await new Promise((resolve, reject) => {
        uploadTask.on('state_changed', 
            snapShot => {
                console.log(snapShot)
            }, 
            error => reject(error),
            async () => {
                const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
                resolve(downloadUrl);
            })
        })
        return url
    }
    const uploadBooktoDB = async () => {
        const temp = await getDownloadImageURLs(imgUser,newBook.name, 'NamsProduct')
        await dispatch(createBook({...newBook,pictures:temp}))
        //NOTE FOR CLOSURE IF SET LIKE JSON.stringify(user)
        alert('Book Added!')
    }
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            <form id='user-form' onSubmit={e => e.preventDefault()}>     
                <div className = "row">
                    <div className = "col-3">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100"
                                                            height={243} />
                            </div>
                        </div>
                        <input type="file" className="file-upload form-control" onChange={e => uploadImages(e)}
                        />           
                    </div>
                    <div className= "col-9">
                        <div className="form-row pb-2">
                            <div className="col">
                                <b>Book's Name: </b>
                                <div className="input-group">
                                    <input type="text" className="form-control" onChange={(e) => setNewBook({
                                        ...newBook,
                                        name: e.target.value
                                    })} />
                                </div> 
                            </div>
                            <div className="col">
                                <b>Price</b>
                                <input type="number" className="form-control" onChange={(e) => setNewBook({
                                        ...newBook,
                                        price: e.target.value
                                    })}  />
                            </div>
                            <div className="col">
                                <b>Sale</b>
                                <input type="number" className="form-control" onChange={(e) => setNewBook({
                                        ...newBook,
                                        sale: e.target.value
                                    })}  />
                            </div>
                        </div>
                        <div className = "form-row pb-2">
                            <div className="col">
                                <b>Author:</b>
                                <input type="text" className="form-control" onChange={(e) => setNewBook({
                                        ...newBook,
                                        info: {
                                            ...newBook.info,
                                            author: e.target.value
                                        }
                                    })} />
                            </div>
                            <div className="col">
                                <b>Category:</b>
                                {/* <input type="text" className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        category: e.target.value
                                    }
                                })}/> */}
                                <select className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        category: e.target.value
                                    }
                                    })}>
                                    <option value="Love">Love</option>
                                    <option value="Politics">Politics</option>
                                    <option value="IT">IT</option>
                                    <option value="Kids">Kids</option>   
                                    <option value="Cook">Cook</option>
                                    <option value="Others">Others</option> 
                                </select>
                            </div>
                            <div className="col">
                                <b>Number Of Pages:</b>
                                <input type="number" className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        numberOfPage: e.target.value
                                    }
                                })}/>
                            </div>
                        </div>
                        <div className = "form-row pb-2">
                            <div className = "col">
                                <b>Publisher: </b>
                                <input type="text" className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        publisher: e.target.value
                                    }
                                })}/>
                            </div> 
                            <div className = "col">
                                <b>Year Published: </b>
                                <input type="number" className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        yearPublished: e.target.value
                                    }
                                })} />
                            </div> 
                            <div className="col">
                                <b>Language:</b>
                                <input type="text" className="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        language: e.target.value
                                    }
                                })}/>
                            </div>       
                        </div>
                        <div className="form-row pb-2">
                            <div className = "col">
                                <b>Link Demo: </b>
                                <input type = "text" className ="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    link: {
                                        ...newBook.link,
                                        demo: e.target.value
                                    }
                                })} />
                            </div>        
                        </div>
                        <div className="form-row pb-2">
                            <div className = "col">
                                <b>Link Full: </b>
                                <input type = "text" className ="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    link: {
                                        ...newBook.link,
                                        full: e.target.value
                                    }
                                })} />
                            </div>        
                        </div>
                        <div className = "form-row pb-2">
                            <div className = "col">
                                <b>Description: </b>
                                <textarea type = "text" className ="form-control" onChange={(e) => setNewBook({
                                    ...newBook,
                                    info: {
                                        ...newBook.info,
                                        description: e.target.value
                                    }
                                })} />
                            </div>        
                        </div>
                            
                    </div>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-primary' onClick={() => uploadBooktoDB()}>Create</button>
                <button className='btn btn-danger' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>)
}
export default CreateBook