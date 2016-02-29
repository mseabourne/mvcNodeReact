var app = require('./app.js');
var ReactDOM = require('react-dom');
var Navigation = require('navigation');

var todoMVC = Navigation.StateInfoConfig.dialogs.todoMVC;
var listState = todoMVC.states.list;
listState.navigated = function (data) {
	var list = app.getList(todos, data.filter);
	ReactDOM.render(list, document.getElementById('content'));
}
Navigation.start();