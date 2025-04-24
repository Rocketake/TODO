import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskEditor } from "../../components/TaskEditor/TaskEditor";
import { fetchTasks } from "../../redux/tasks/operations";
import { selectLoading } from "../../redux/tasks/selectors";
import { TaskList } from "../../Components/TaskList/TaskList.jsx";

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <TaskEditor />
      <div>{isLoading && "Request in progress..."}</div>
      <TaskList />
    </>
  );
}
