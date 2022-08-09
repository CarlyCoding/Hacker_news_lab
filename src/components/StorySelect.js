import React from "react";




const StorySelect = ({stories, getStories}) => {

    const handleChange = (event) => {
        const index = event.target.value
        getStories(stories[index])
    }

    const storyOptions = stories.map((story, index) => {
        return <option key={index} value={index}>{story}</option>
    })


    return (
        <>
            <select onChange={handleChange}>
                {storyOptions}
            </select>
        </>
    );

}

export default StorySelect;