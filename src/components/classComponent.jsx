"use client"

import {Component} from 'react'

class ButtonComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
}

    handleClick = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    // handleClick = () => {
    //     alert(`Kamu menekan tombol ${this.props.nama}`)
    // }

    render() {
		return (
			<div>
				<button className='bg-blue-500 rounded-3xl font-bold' onClick={this.handleClick}>Click Me</button>
				<p>Jumlah Klik: {this.state.count}</p>
			</div>
		)
	}
}

export {ButtonComponent}