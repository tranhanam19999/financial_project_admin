import React from 'react'
import {Modal} from 'react-bootstrap'
const UserModal = (props) => {
    const onCheck = (type) => {
        if(type == 'update')
            return true
        return false
    }
    console.log('im props ', props)
    return (
        <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter" centered >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body> 
            <form id='user-form' onSubmit={e => e.preventDefault()}>   
                <p>Im User</p>  
                {/* <div className = "row">
                    <div className = "col-3">
                        <div id="carouselExampleControls" className="carousel slide pb-3" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={props.item.photoUser} 
                                                                height={200} alt="First slide"/>
                                </div>
                            </div>
                        </div>
                        <input type="file" className="file-upload form-control" onChange={e => uploadImages(e)}/>
                    </div>
                    <div className= "col-9">
                            <div className = "form-row pb-2">
                                <div className = "col">
                                    <b>Bio: </b>
                                    <textarea type = "text" className ="form-control"  
                                              disabled={!onCheck(props.optionType)} 
                                              on ={e => {data.bio = e.target.value}}>
                                              {props.item.bio}
                                    </textarea>
                                </div>        
                            </div>
                            <div className="form-row pb-2">
                                <div className="col">
                                    <b>Full Name: </b>
                                    <div className="input-group">
                                        <input type="text" className="form-control"
                                            disabled={!onCheck(props.optionType)} 
                                            defaultValue={props.item.fullName}
                                            onChange={e => data.fullName = e.target.value}
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-success" type="button" onClick={() => alert(props.item._id)}>Id</button>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col">
                                    <b>Email: </b>  
                                    <input type="email" pattern="^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$" className = "form-control" 
                                        defaultValue = {props.item.authenticateMethod.local.email} 
                                        disabled={!onCheck(props.optionType)} 
                                        onChange={e => data.authenticateMethod.local.email = e.target.value }
                                    />
                                </div>
                            </div>
                            <div className="form-row pb-2">                          
                                <div className="col">
                                    <b>Sex: </b>
                                    <select className= "form-control" id = "chuongcho2" name="role" 
                                            defaultValue={props.item.sex} disabled={!onCheck(props.optionType)} 
                                            onChange={e => data.sex = e.target.value}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <b>Birthday: </b>
                                    <input 
                                        type="date" className="form-control" 
                                        placeholder="DD-MM-YYYY"
                                        pattern='^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$'
                                        defaultValue= {props.item.birthday} 
                                        disabled={!onCheck(props.optionType)} 
                                        onChange={e => data.birthday =  e.target.value}/>
                                </div>
                                <div className="col">
                                    <b>Rating: </b>
                                    <ReactStars
                                            edit={onCheck(props.optionType)} 
                                            count={5} 
                                            value={props.item.rating}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                            size={25}
                                            onChange={newRate => data.rating = newRate}
                                    />
                                </div>
                            </div>
                            <div className="form-row pb-2">
                                <div className="col">
                                    <b>Workplace: </b>
                                    <input className="form-control" defaultValue={props.item.workPlace} disabled={!onCheck(props.optionType)} 
                                           onChange={e => data.workPlace = e.target.value}/>
                                </div>
                                <div className="col">
                                    <b>Contact: </b>
                                    <input className="form-control" defaultValue={props.item.phoneNumber} disabled={!onCheck(props.optionType)} 
                                           onChange={e => data.phoneNumber =  e.target.value}/>
                                </div>
                            </div>
                            <div className="form-row pb-2">
                                <div className="col">
                                    <b>Balance: </b>
                                    <input type="number" className="form-control" defaultValue={props.item.balance} disabled={!onCheck(props.optionType)}
                                           onChange={e => data.balance = e.target.value}/>
                                </div>
                                <div className="col">
                                    <b>BankId: </b>
                                    <input className="form-control" defaultValue={props.item.bankId} disabled={!onCheck(props.optionType)} 
                                           onChange={e => data.bankId = e.target.value}/>
                                </div>
                            </div>
                    </div>
            </div> */}
            </form>
            </Modal.Body>
            <Modal.Footer>
                {/* <FooterContent/> */}
                <button className='btn btn-primary' onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    )
}
export default UserModal