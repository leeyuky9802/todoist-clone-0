import { FirebaseContext } from "../context/firebase-context"
import { useContext, useEffect, useState } from "react";

export const Bar = () => {
    const [taskContents, setTaskContents] = useState([]);
    let functions = useContext(FirebaseContext);


    useEffect(() => {
        async function updatetask() {
            
            let tasks = await functions.readTasks();

            let newContent = [];

            tasks.forEach((task) => {
                newContent.push(task.data().Content);
            })
            setTaskContents(newContent);
        }

        updatetask();
    }, [functions, setTaskContents])

    return (
        <>
        <ul>
            {
                taskContents.map((taskContent) => {
                    return (
                        <li key={taskContent}>{taskContent}</li>
                    )
                })
            }
        </ul>
        </>
    )
}