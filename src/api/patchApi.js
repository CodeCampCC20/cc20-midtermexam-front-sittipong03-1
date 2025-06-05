import axios from "axios";
    
    async function patchApi(id , userId , status ,task) {
    try {
        const response = await axios.patch(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/${userId}` ,{
            completed: status ,
            taskName : task
        });
    } catch (error) {
        console.error(error);
    }
    }
export default patchApi