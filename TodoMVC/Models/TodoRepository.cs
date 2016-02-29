using System.Collections.Generic;

namespace TodoMVC.Models
{
	public class TodoRepository
	{
		public IEnumerable<Todo> Todos
		{
			get
			{
				return new List<Todo>
				{
					new Todo{ Id = 1, Title = "Learn about React", Completed = true },
					new Todo{ Id = 2, Title = "Learn about the Navigation router" },
					new Todo{ Id = 3, Title = "Download the article's code sample", Completed = true },
					new Todo{ Id = 4, Title = "Tweet @grahammendick about the article" },
					new Todo{ Id = 5, Title = "Tell people about Progressive Enhancement" }
				};
			}
		}
	}
}