import axios from "axios";
import {create} from "zustand"

const useTodoStore = create ((set) => ({
    todoLists : [],
    getApi : async (id) => {
    try {
        const response = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`);
        set({todoLists : response.data.todos})
        console.log()
    } catch (error) {
        console.error(error);
    }
    }


}))

export default useTodoStore