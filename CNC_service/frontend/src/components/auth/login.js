import React, { Component } from "react";
import axiosInstance from "./../../axios/axiosApi";
import { Redirect, Route, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./css/login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", modal:false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmitWThen = this.handleSubmitWThen.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmitWThen(event) {
        event.preventDefault();
        axiosInstance.post('/token/obtain/', {
            username: this.state.username,
            password: this.state.password
        }).then(
            result => {
                axiosInstance.defaults.headers['Authorization'] = "JWT " + result.data.access;
                localStorage.setItem('access_token', result.data.access);
                localStorage.setItem('refresh_token', result.data.refresh);
            }
        ).catch(error => {
            throw error;
        })
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/token/obtain/', {
                username: this.state.username,
                password: this.state.password
            });
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            this.props.history.push("/");
            return response;
        } catch (error) {
            this.setState({modal:true})
            throw error;
        }
    }

    handleClose(){
        this.setState({modal:false})
    }

    render() {
        let modal = []
        modal.push(
            <>
            <Modal show={this.state.modal} onHide={this.handleClose} className="text-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Ошибка!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Произошла ошибка при авторизации, проверьте введенные данные и повторите снова.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
        return (
            <div className="simple-login-container">
                {modal}
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Войти</h2>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="username" type="text" className="form-control" placeholder="Логин" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password" type="password" placeholder="Пароль" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" className="btn btn-block btn-login" value="Войти"/>
                        </div>
                    </div>
                    <div className="row">
                        <label>Нет учётной записи?</label>
                        <div className="col-md-12">
                            <Link to="/signup/">Регистрация</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;