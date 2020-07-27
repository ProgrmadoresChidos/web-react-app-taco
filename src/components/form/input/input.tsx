import React, { Component } from 'react';

// Styles
import styles from './input.module.css';

type InputProps = {
	style?: Object,
	placeholder?: string,
};

type InputState = {
	value: string,
};

export default class Input extends Component<InputProps, InputState> {
	static defaultProps = {
		style: {},
		placeholder: '',
	}

	constructor(props: InputProps) {
		super(props);
		this.state = {
			value: '',
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	}

	render() {
		const { style, placeholder } = this.props;
		const { value } = this.state;
		return (
			<input
				className={styles.input}
				type="text"
				value={value}
				onChange={this.handleChange}
				placeholder={placeholder}
				style={style}
			/>
		);
	}
}