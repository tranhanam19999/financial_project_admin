import React, {useEffect} from 'react'
import NavBar from '../../components/Layout/NavBar'
import {loadScripts} from '../../utils/'
const HomePage = () => {
    // useEffect(() => {
    //     document.onload = loadScripts()
    // },[])
    return (
        <div>
            <NavBar/>
        </div>
    )
}
export default HomePage