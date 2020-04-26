import React, { Component } from "react";
import axiosInstance from "./../../axios/axiosApi";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            name: "",
            surname: "",
            second_name: "",
            errors: {},
            modal: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                second_name: this.state.second_name,
            });
            this.props.history.push("/login/");
            return response;
        } catch (error) {
            this.setState({
                errors: error.response.data,
                modal: true
            });
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
                    Произошла ошибка при регистрации, проверьте введенные данные и повторите снова.
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
                    <h2>Регистрация</h2>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="name" type="text" placeholder="Имя" className="form-control" value={this.state.name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="surname" type="text" placeholder="Фамилия" className="form-control" value={this.state.surname} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="second_name" type="text" placeholder="Отчество" className="form-control" value={this.state.second_name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="username" type="text" className="form-control" placeholder="Логин" value={this.state.username} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="email" type="text" className="form-control" placeholder="Почта" value={this.state.email} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password" type="password" placeholder="Пароль" className="form-control" value={this.state.password} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input name="password2" type="password" placeholder="Повторите пароль" className="form-control"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <input type="submit" className="btn btn-block btn-login" value="Зарегистрироваться"/>
                        </div>
                    </div>
                    <div className="row">
                        <label>Есть учётная запись?</label>
                        <div className="col-md-12">
                            <Link to="/login/">Войти</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;