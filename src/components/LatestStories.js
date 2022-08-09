import React from "react";
import StoryDetail from "./StoryDetail";
import Search from "./StorySearch";

const LatestStories = ({searchedStories}) => {

    const storyItems = searchedStories.map((story, index) => {
        return <StoryDetail key={index} story={story} />
    })

    return (

        <>

        <ul>

            {storyItems}

        </ul>
        
        
        </>

    );

}

export default LatestStories;