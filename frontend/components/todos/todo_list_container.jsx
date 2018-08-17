import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';

const mSTP = state => ({
  todos: allTodos(state)
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
  mSTP,
  mDTP
)(TodoList);