var React = require('react');
var Navigation = require('navigation');
var RefreshLink = require('navigation-react').RefreshLink;

var config = [
	{ key: 'todoMVC', initial: 'list', states: [
		{ key: 'list', route: '{filter?}', trackCrumbTrail: false }]
	}
];
Navigation.StateInfoConfig.build(config);
Navigation.settings.historyManager = new Navigation.HTML5HistoryManager();

var List = React.createClass({
	render: function () {
		var filter = this.props.filter;
		var todoFilter = function(todo){
			return !filter || (filter === 'active' && !todo.Completed)
			   || (filter === 'completed' && todo.Completed);
		}
		var todos = this.props.todos.filter(todoFilter).map(function(todo) {
			return <li key={todo.Id} className={todo.Completed ? 'completed' : null}>{todo.Title}</li>;
		});
		return (
			<div>
				<ul className="list">{todos}</ul>
				<ul className="filter">
					<li><RefreshLink toData={{filter: ''}}>All</RefreshLink></li>
					<li><RefreshLink toData={{filter: 'active'}}>Active</RefreshLink></li>
					<li><RefreshLink toData={{filter: 'completed'}}>Completed</RefreshLink></li>
				</ul>
			</div>
		);
	}
});

function getList(todos, filter) {
	return <List todos={todos} filter={filter} />;
}
exports.getList = getList;