import { useSelector } from "react-redux";
import { Task } from "../Task/Task.jsx";
import { selectAllTasks } from "../../Redux/tasks/selectors.js";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul className={css.list}>
      {tasks.map((task) => (
        <li key={task._id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
