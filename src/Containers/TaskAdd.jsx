import { connect } from 'react-redux';
import { addTask } from '../Actions';
import TaskAdd from '../Components/TaskAdd';

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskAdd);
