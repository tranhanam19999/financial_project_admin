import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getTrans} from '../../store/listtrans'
import {approveTran} from '../../api/'
import {Modal} from 'react-bootstrap'

const ApproveModal = (props) => {
    const dispatch = useDispatch()
    const [initTran, setInitTran] = useState({})
    useEffect(() => {
        setInitTran({...props.item})
    },[props.item])
    const FooterContent = ({initItem}) => {
        const updateData = async (val) => {
            try {
                let result = await approveTran(val)
                await dispatch(getTrans())
                alert("Successfully Approved!")
            }
            catch (e) {
                console.log('Error ', e.message)
            }
        }
        return (<button className="btn btn-primary" 
                    form='user-form' 
                    onClick={() => updateData(initItem)}
                    >
                    Submit
                </button>)
    }
    const onCheck = (type) => {
        if(type == 'update')
            return false
        return true
    }
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form id='user-form' onSubmit={e => e.preventDefault()}>   
                    <div className="row">
                        <div className="col-2">
                            <b>Step 1:</b>
                        </div>
                        <div className="col">
                            <p className="form-control">Call the buyer to confirm the payment</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <b>Step 2:</b>                 
                        </div>
                        <div className="col">
                            <p className="form-control">Validate the information</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <b>Step 3:</b>                 
                        </div>
                        <div className="col">
                            <p className="form-control">If validation is correct, change the status of that transaction</p>
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
export default ApproveModal