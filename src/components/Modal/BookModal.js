import React, {useState,useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {updateBook, deleteBook} from '../../api/'
import {getBook} from '../../store/listbook'
const BookModal = (props) => {
    const dispatch = useDispatch()
    let [initBook,setInitBook] = useState({})
    useEffect(() => {
        setInitBook({...props.item})
    }, [props.item])
    const FooterContent = ({initItem}) => {
        const deleteData = async (val) => {
            let result = await deleteBook(val)
            await dispatch(getBook())
            alert('Delete Succesfully!')
        }
        const updateData = async (val) => {
            let result = await updateBook(val)
            await dispatch(getBook())
            alert('Response: ' + await result.json())
        }
        switch (props.optionType) {
            case 'delete': 
                return (<button className = "btn btn-danger" 
                            onClick={() => deleteData(initItem)}>
                            Confirm
                        </button>)
            case 'update':
                return (<button className="btn btn-primary" 
                            form='user-form' 
                            onClick={() => updateData(initItem)}>
                            Update
                        </button>)
            default:
                return (<></>)
        }
    }

    const onCheck = (type) => {
        if(type == 'update')
            return true
        return false
    }
    return props.item == null ? <></> : (
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
                        <div id="carouselExampleControls" className="carousel slide pb-3" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={props.item.pictures} 
                                                                height={243} alt="First slide"/>
                                </div>
                            </div>
                        </div>
                        <input type="file" className="file-upload form-control" //onChange={e => uploadImages(e)}
                        />           
                    </div>
                    <div className= "col-9">
                        <div className="form-row pb-2">
                            <div className="col">
                                <b>Book's Name: </b>
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                            disabled={!onCheck(props.optionType)} 
                                            defaultValue={props.item.name}
                                            onChange={(e) => setInitBook({
                                                ...initBook,
                                                name: e.target.value
                                            })}
                                        />
                                    <div className="input-group-append">
                                        <button className="btn btn-success" 
                                        type="button" 
                                        onClick={() => alert(props.item._id)}>Id</button>
                                    </div>
                                </div> 
                            </div>
                            <div className="col">
                                <b>Price</b>
                                <input type="text" 
                                className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.price + '$'}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        price: e.target.value
                                    }
                                })}
                                />
                            </div>
                            <div className="col">
                                <b>Sale</b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.sale + '%'}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    sale: e.target.value
                                })}
                                />
                            </div>
                        </div>
                        <div className = "form-row pb-2">
                            <div className="col">
                                <b>Author:</b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.info.author}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        author: e.target.value
                                    }
                                })}
                                />
                            </div>
                            <div className="col">
                                <b>Category:</b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.info.category}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        category: e.target.value
                                    }
                                })}
                                />
                            </div>
                            <div className="col">
                                <b>Number Of Pages:</b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.info.numberOfPage}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        numberOfPage: e.target.value
                                    }
                                })}
                                />
                            </div>
                        </div>
                        <div className = "form-row pb-2">
                            <div className = "col">
                                <b>Publisher: </b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.info.publisher}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        publisher: e.target.value
                                    }
                                })}/>
                            </div> 
                            <div className = "col">
                                <b>Year Published: </b>
                                <input type="text" className="form-control" 
                                disabled={!onCheck(props.optionType)} 
                                defaultValue={props.item.info.yearPublished}
                                onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        yearPublished: e.target.value
                                    }
                                })}
                                />
                            </div> 
                            <div className="col">
                                <b>Language:</b>
                                <input type="text" className="form-control"
                                 disabled={!onCheck(props.optionType)}
                                 defaultValue={props.item.info.language}
                                 onChange={(e) => setInitBook({
                                    ...initBook,
                                    info: {
                                        ...initBook.info,
                                        language: e.target.value
                                    }
                                })}
                                />
                            </div>       
                        </div>
                        
                        <div className = "form-row pb-2">
                            <div className = "col">
                                <b>Description: </b>
                                <textarea type = "text" className ="form-control"  
                                    disabled={!onCheck(props.optionType)}                              
                                    defaultValue={props.item.info.description} 
                                    onChange={(e) => setInitBook({
                                        ...initBook,
                                        info: {
                                            ...initBook.info,
                                            description: e.target.value
                                        }
                                    })}
                                />
                            </div>        
                        </div>
                            
                    </div>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
                 <FooterContent initItem = {initBook}/>
                <button className='btn btn-primary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}
export default BookModal