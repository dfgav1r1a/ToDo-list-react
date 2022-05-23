//This is the refactored code of the Todo portion of the app. I am turning the todo items into child components of the App() component.
function Form({addTodo}) {
	
	const [value, setValue] = React.useState('');
	
	function handleSubmit (e) {
		e.preventDefault();//preventing the default behavior of the form
		if (!value) return;//checking for content in the input field
		addTodo(value);//this function exist in the parent component in index.js
		setValue('');//making sure the input field stays empty
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" className="input" placeholder="Add ToDo..." value={value} onChange={e => setValue(e.target.value)}></input>
		</form>
	);
}

