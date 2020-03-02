import React, { Component } from 'react'

class MyName extends Component {
	// static defaultProps = {
	// 	name: '기본이름'
	// }
	render() {
		return (
			<div>
				<p>MyName이라는 컴포넌트가 받아온 name props의 값은</p>
				<p>{this.props.name}</p>
			</div>
		)
	}
}
MyName.defaultProps = {
	name: '기본이름'
}

export default MyName