import axios from "axios";
    
    async function getApi(id) {
    try {
        const response = await axios.get(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}`);
        console.log(response.data.todos);
    } catch (error) {
        console.error(error);
    }
    }
export default getApi