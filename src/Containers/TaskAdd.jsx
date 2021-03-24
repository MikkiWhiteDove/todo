import { connect } from 'react-redux';
import { addTask } from '../Actions';
import TaskAdd from '../Components/AddItem';

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TaskAdd);
