import { Fragment } from 'react'
import {createPortal} from 'react-dom'
import './Model.css'

export default function Model({showModel, hideModel}){

    return createPortal(
        <Fragment>
            <div className={`alert ${showModel?'':'hidden'}`}>
                <h2>This is an alert</h2>
                <p>Simple example for showing createPortal</p>
                <button onClick={hideModel}>OK</button>
            </div>
            <div className={`overlay ${showModel? '': 'hidden'}`}></div>
        </Fragment>,document.getElementById("model")
    )
}