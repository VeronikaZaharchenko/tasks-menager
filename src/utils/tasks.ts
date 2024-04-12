import { AppDispatch } from "../store/store";
import {
    addTask,
    updateTask,
    updateTaskAsync,
    deleteTasks,
    deleteTasksAsync,
    deleteTaskId,
    deleteTaskAsyncId, addTaskAsync
} from "../store/slices/tasks-slice/tasks-slice";

export interface IAdd {
    (dispatch: AppDispatch): void;
}

interface IUpdate {
    (id: string, dispatch: AppDispatch): void;
}

export interface IDeleteAll {
    (dispatch: AppDispatch): void;
}

interface IDeleteId {
    (id: string, dispatch: AppDispatch): void;
}

export const add: IAdd = (dispatch) => {
    dispatch(addTask());
    // @ts-ignore
    dispatch(addTaskAsync());
};

export const update: IUpdate = (id, dispatch) => {
    dispatch(updateTask(id));
    // @ts-ignore
    dispatch(updateTaskAsync(id));
};

export const deleteAll: IDeleteAll = (dispatch) => {
    dispatch(deleteTasks());
    dispatch(deleteTasksAsync());
};

export const deleteId: IDeleteId = (id, dispatch) => {
    dispatch(deleteTaskId(id));
    dispatch(deleteTaskAsyncId(id));
};
