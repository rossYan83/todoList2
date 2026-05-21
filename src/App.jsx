import { Component } from "react";
import { nanoid } from "nanoid";
import GlobalStyle from "./GlobalStyle";
import { AppContainer } from "./App.styles";
import initialTodos from "./todo.json";
import Info from "./components/Info/Info";
import Filter from "./components/Filter/Filter";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  handleAdd = (text) => {
    this.setState((prev) => ({
      todos: [{ id: nanoid(), text, completed: false }, ...prev.todos],
    }));
  };

  handleToggle = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  };

  handleDelete = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((t) => t.id !== id),
    }));
  };

  getFiltered = () => {
    const { todos, filter } = this.state;
    if (!filter.trim()) return todos;
    return todos.filter((t) =>
      t.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { todos, filter } = this.state;
    const completed = todos.filter((t) => t.completed).length;
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Info total={todos.length} completed={completed} />
          <TodoEditor onAdd={this.handleAdd} />
          <Filter value={filter} onChange={(v) => this.setState({ filter: v })} />
          <TodoList
            todos={this.getFiltered()}
            onToggle={this.handleToggle}
            onDelete={this.handleDelete}
          />
        </AppContainer>
      </>
    );
  }
}
  
export default App;