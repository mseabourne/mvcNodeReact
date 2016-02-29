var React = require('react');
var Navigation = require('navigation');
var RefreshLink = require('navigation-react').RefreshLink;

var config = [{ key: 'todoMVC', initial: 'list', states: [{ key: 'list', route: '{filter?}', trackCrumbTrail: false }]
}];
Navigation.StateInfoConfig.build(config);
Navigation.settings.historyManager = new Navigation.HTML5HistoryManager();

var List = React.createClass({
	displayName: 'List',

	render: function () {
		var filter = this.props.filter;
		var todoFilter = function (todo) {
			return !filter || filter === 'active' && !todo.Completed || filter === 'completed' && todo.Completed;
		};
		var todos = this.props.todos.filter(todoFilter).map(function (todo) {
			return React.createElement(
				'li',
				{ key: todo.Id, className: todo.Completed ? 'completed' : null },
				todo.Title
			);
		});
		return React.createElement(
			'div',
			null,
			React.createElement(
				'ul',
				{ className: 'list' },
				todos
			),
			React.createElement(
				'ul',
				{ className: 'filter' },
				React.createElement(
					'li',
					null,
					React.createElement(
						RefreshLink,
						{ toData: { filter: '' } },
						'All'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						RefreshLink,
						{ toData: { filter: 'active' } },
						'Active'
					)
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						RefreshLink,
						{ toData: { filter: 'completed' } },
						'Completed'
					)
				)
			)
		);
	}
});

function getList(todos, filter) {
	return React.createElement(List, { todos: todos, filter: filter });
}
exports.getList = getList;