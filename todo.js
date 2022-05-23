//this is the refactoring of the form pportion of our app. I am turning this form into a child component.
function Todo ({todo, index, remove}) {

	function handle() {
		remove(index);
	}

	return (
		<div className="todo" onClick={handle}>{todo.text} (-)</div>
	);
}
