import React , {useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import {Modal} from 'react-bootstrap'
import { deleteTran, updateTran } from '../../api'
import { getTrans } from '../../store/listtrans'
const TransModal = (props) => {
    const dispatch = useDispatch()
    let [initTran,setInitTran] = useState({})
    useEffect(() => {
        setInitTran({...props.item})
    }, [props.item])
    const FooterContent = ({initItem}) => {
        const deleteData = async (val) => {
            let result = await deleteTran(val)
            await dispatch(getTrans())
            alert('Delete Succesfully!')
        }
        const updateData = async (val) => {
            let result = await updateTran(val)
            await dispatch(getTrans())
            alert('Successfully Updated!')
        }
        switch (props.optionType) {
            case 'delete': 
                return (<button className = "btn btn-danger"
                            onClick={() => deleteData(initItem)}
                            >
                            Confirm
                        </button>)
            case 'update':
                return (<button className="btn btn-primary" 
                            form='user-form' 
                            onClick={() => updateData(initItem)}
                            >
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
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Transaction
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            <form id='user-form' onSubmit={e => e.preventDefault()}>     
                <div className="row">
                    <div className="col">
                        <b>User's Name: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.user.fullName}
                        />
                    </div>
                    <div className="col">
                        <b>User's BankID: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.user.bankId}
                        />
                    </div>
                    <div className="col">
                        <b>User's Phonenumber: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.user.phoneNumber}
                        />
                    </div>
                    <div className="col">
                        <b>User's Email: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.user.local.email}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    <b>Products: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.product.map((val => {
                            return val.name
                        }))}
                        />
                    </div>
                    <div className="col">
                        <b>Total Price: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.product.reduce((sum,val) => {																										
                            return parseInt(sum += (val.price*(val.sale/100)))
                        },0)+ 'đ'}
                        />
                    </div>
                    <div className="col">
                        <b>User's Phonenumber: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.user.phoneNumber}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <b>Date: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.date}
                        />
                    </div>
                    <div className="col">
                        <b>Status: </b>
                        {/* <input type="text" 
                        className="form-control" 
                        disabled={!onCheck(props.optionType)} 
                        defaultValue={props.item.status}
                        /> */}
                        <select className="form-control" defaultValue={props.item.status} onChange={(e) => setInitTran({
                            ...initTran,
                            status: e.target.value
                        })}>
                            <option value="PENDING">Pending</option>
                            <option value="SUCCESS">Success</option> 
                        </select>
                    </div>
                    <div className="col">
                        <b>Ratings: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.rating ? props.item.rating : 'User not rated yet'}
                        />
                    </div>      
                </div>
                <div className="row">
                    <div className="col">
                        <b>User's Review: </b>
                        <input type="text" 
                        className="form-control" 
                        disabled={true} 
                        defaultValue={props.item.review ? props.item.review : 'User not rated yet'}
                        />
                    </div>
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <FooterContent initItem = {initTran}/>
                <button className='btn btn-primary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}
export default TransModal