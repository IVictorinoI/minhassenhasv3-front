import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'https://localhost:44330/api/v1/passwords'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeLogin = this.handleChangeLogin.bind(this)
        this.handleChangePasswordKey = this.handleChangePasswordKey.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        axios.defaults.headers.common['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlZpY3RvciAyIiwicm9sZSI6IkRlZmF1bHRSb2xlIiwiSWQiOiIxIiwibmJmIjoxNjA3NDQyMjQ0LCJleHAiOjE2MDc2MTUwNDQsImlhdCI6MTYwNzQ0MjI0NH0.0mLDPkH20UENLuCSCpETbTKGLCxGlcagazNetb7nWNE'

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChangeDescription(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleChangeLogin(e) {
        this.setState({...this.state, login: e.target.value })
    }

    handleChangePasswordKey(e) {
        this.setState({...this.state, passwordKey: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        const login = this.state.login
        const passwordKey = this.state.passwordKey
        axios.post(URL, { description, login, passwordKey })
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm 
                    description={this.state.description}
                    handleChangeDescription={this.handleChangeDescription}
                    handleChangeLogin={this.handleChangeLogin}
                    handleChangePasswordKey={this.handleChangePasswordKey}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}