using EdgeJs;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using TodoMVC.Models;

namespace TodoMVC.Controllers
{
    public class HomeController : Controller
    {
		private static Func<object, Task<object>> render = Edge.Func(@"
			var app = require('../../Scripts/app.js');
			var ReactDOMServer = require('react-dom/server');
			var Navigation = require('navigation');
        
			return function (data, callback) {
			  Navigation.StateController.navigateLink(data.Url);
			  var filter = Navigation.StateContext.data.filter;
			  var list = app.getList(data.Todos, filter);
			  callback(null, ReactDOMServer.renderToString(list));
			}
		");

		public async Task<ActionResult> Index()
        {
			var todos = new TodoRepository().Todos.ToList();
			var data = new
			{
				Url = Request.Url.PathAndQuery,
				Todos = todos
			};
			ViewBag.List = (string)await render(data);
			ViewBag.Todos = todos;
			return View();
		}
    }
}