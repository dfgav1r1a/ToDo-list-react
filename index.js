//This first step declared the component and initialized the state for the todo list.
//to render each of the todo list the .map callback was used.
//The second step was to add some styling to the component. We started editing a CSS file and then added className to the component
//referencing the class that I wanted to apply.
//The third step is to add a <form> with a child <input> to allow the user add items to the list
//The fourth step is to add our remove item function that will remove an item from our to do list. In this step we are adding an id and an onClick event to the <div> holding the item in our component which is inside the .map callback.

function App () {
	const [todos, setTodos] = React.useState([
		{
			text: 'Learn React',
			isCompleted: false
		}, 
		{
			text: 'Make the first ToDo list',
			isCompleted: false
		}, 
		{
			text: 'Render the component',
			isCompleted: false
		}]);

	const addTodo = text => {
		const newTodos = [...todos, {text: text, isCompleted: false}];
		setTodos(newTodos);
	}	
	
	const removeItem = index => {
		const items = [...todos];//referencing our current todo list
		items.splice(index, 1);//removing 1 item from the todo list using its index value from its id
		setTodos(items) //updating the state of our todo app
	}

	return (
		<div className='app'>
			<div className='todo-list'>
				{todos.map((todo, i) => <Todo index={i} key={i} todo={todo} remove={removeItem}/>)}
				<Form addTodo={addTodo} />			
			</div>
		</div>
	);
}

ReactDOM.render(
<App />, document.getElementById('root')
);


