import React from 'react'
import If from './if'

const IconButton = (props) => {
    return <If test={!props.hide}>
        <button type="button" className={'btn btn-'+ props.buttonType} 
            onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If>;
}

export default IconButton