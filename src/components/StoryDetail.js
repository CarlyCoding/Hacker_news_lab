import React from "react";
import Search from "./StorySearch";


const StoryDetail = ({story}) => {

    return (

        <>
            <div>
                <a href={story.url}>{story.title}</a>
            </div>
        
        
        </>

    )
}

export default StoryDetail;