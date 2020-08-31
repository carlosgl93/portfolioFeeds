import React, {useState} from 'react'
import Project from "./Project";

function Portfolio() {

    const [projects, setProjects] = useState();

    

    return (
        <div>
            <h1>Projects Feed like</h1>
            <Project/>
            {/**Projects */}
        </div>
    )
}

export default Portfolio
