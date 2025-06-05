import axios from "axios";
    
    async function postApi(id, post) {
    try {
        const response = await axios.post(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos` ,{
            taskName: post ,
            userId : id
        });
    } catch (error) {
        console.error(error);
    }
    }
export default postApi