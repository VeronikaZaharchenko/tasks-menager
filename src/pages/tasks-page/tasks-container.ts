import { connect } from "react-redux";
import { RootState } from "../../store/store";
import Tasks from "../../components/tasks/Tasks";


const mapStateToProps = (state: RootState) => {
    return {
        titleInput:state.tasks.titleInput,
        tasks:state.tasks.tasks
    };
};

const TasksContainer = connect(mapStateToProps)(Tasks);
export default TasksContainer;