import React from "react";
import { useTasksValue } from "../context";
import { countTasks } from "../helpers";

// eslint-disable-next-line react/prop-types
export const CollatedTasks = ({handleClick, name, id, icon}) => {

    const {tasks} = useTasksValue();

    let count = countTasks(tasks, id);

    return (
        <div onClick={() => handleClick()}>
            <div>
                <div className="inline">
                    {icon}
                </div>
                
                <h1 className="inline">{count}</h1>
            </div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    )
}