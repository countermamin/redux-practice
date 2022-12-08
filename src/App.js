import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const countReducer = function (state = 0, action) {
	switch (action.type) {
		case 'ADD':
			return state + 1;
		case 'SUBTRACT':
			return state - 1;
		default:
			return state;
	}
};

const store = createStore(countReducer);

const mapStateToProps = state => {
	return {
		count: state,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		add: () => dispatch({ type: 'ADD' }),
		subtract: () => dispatch({ type: 'SUBTRACT' }),
	};
};

const Component = ({ count, add, subtract }) => {
	return (
		<>
			<h1>Count = {count}</h1>
			<button onClick={add}>Add</button>
			<button onClick={subtract}>Subtract</button>
			<p>Test</p>
		</>
	);
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

function App() {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	);
}

export default App;
