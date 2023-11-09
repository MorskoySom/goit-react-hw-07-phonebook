import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://654cce2377200d6ba85973cd.mockapi.io";

export const fetchTasks = () => async dispatch => {
    try {
        // Индикатор загрузки
        dispatch(fetchingInProgress());
        // HTTP-запрос
        const response = await axios.get("/contacts");
        // Обработка данных
        dispatch(fetchingSuccess(response.data));
    } catch (e) {
        // Обработка ошибки
        dispatch(fetchingError(e.message));
    }
};