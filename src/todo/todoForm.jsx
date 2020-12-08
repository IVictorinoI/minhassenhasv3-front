import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import Todo from './todo'

const TodoForm = (props) => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Descrição'
                    onChange={props.handleChangeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
                <input id='login' className='form-control'
                    placeholder='Login'
                    onChange={props.handleChangeLogin}
                    onKeyUp={keyHandler}
                    value={props.login}></input>
                <input id='passwordKey' className='form-control'
                    placeholder='Senha'
                    onChange={props.handleChangePasswordKey}
                    onKeyUp={keyHandler}
                    value={props.passwordKey}></input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton buttonType='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton buttonType='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton buttonType='info' icon='search'
                    onClick={props.handleSearch}></IconButton>
                <IconButton buttonType='default' icon='close'
                    onClick={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}

export default TodoForm