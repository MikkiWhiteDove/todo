import { connect } from 'react-redux';
import { deleteTask, completeTask, updateTask } from '../Actions';
import TodoList from '../Components/List';

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteTask(id)),
  updateItem: (text, id) => dispatch(updateTask(text, id)),
  toggleItem: (id) => dispatch(completeTask(id)),
});

export default connect(null, mapDispatchToProps)(TodoList);