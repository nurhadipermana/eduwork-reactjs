import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}:</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)}/>
            <br />
        </div>

    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft: '-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong']
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong']
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }

        if(password.length < 8) {
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            });
        }else {
            alert(`
            nama: ${this.state.email}
            jurusan: ${this.state.password}
            `);
            this.setState({
                errors: []
            }) 
        }
    }

    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Login Page</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="email" name="email" label="Email" 
                        onChange={value => this.setState({email: value})}/>
                    <Input type="password" name="password" label="Password" 
                        onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Validation;