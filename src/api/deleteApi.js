import axios from "axios";
    
    async function deletetApi(id, userId) {
    try {
        const response = await axios.delete(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/${userId}`);
    } catch (error) {
        console.error(error);
    }
    }
export default deletetApi