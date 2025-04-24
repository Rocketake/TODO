import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleCompleted } from "../../Redux/tasks/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task._id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.status}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.description}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
