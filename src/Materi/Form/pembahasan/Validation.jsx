import React from "react";
const Input = ({label, type, name}) => {
    return (
        <div>
            <label>
                {label}: <Input type={type} name={name}/>
            </label>
            <br />
        </div>

    )
}

class Validation extends React.Component {
    render() {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                <form>
                    <Input type="text" name="username" label="Username" />
                    <Input type="password" name="password" label="Password" />
                </form>
            </div>
        )
    }
}

export default Validation;