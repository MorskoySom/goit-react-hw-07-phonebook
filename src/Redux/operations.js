import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://654cce2377200d6ba85973cd.mockapi.io";

export const fetchTasks = () => async dispatch => {
    try {

        dispatch(fetchingInProgress());

        const response = await axios.get("/contacts");

        dispatch(fetchingSuccess(response.data));
    } catch (e) {

        dispatch(fetchingError(e.message));
    }
};