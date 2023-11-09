import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./Redux/operations";
import { getItems } from "./Redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  // Получаем части состояния
  const { items, isLoading, error } = useSelector(getItems);
  // Вызываем операцию

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Рендерим разметку в зависимости от значений в состоянии
  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
  );
};




