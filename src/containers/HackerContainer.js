import React, { useState, useEffect } from "react";
import LatestStories from "../components/LatestStories";
import StoryDetail from "../components/StoryDetail";
import StorySelect from "../components/StorySelect";
import Search from "../components/StorySearch";



const HackerContainer = () => {

    const [stories, setStories] = useState([])

    // const [selectedStory, setSelectedStory] = useState(null)

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then( res => res.json() )
            .then( data => getStories(data))
    }, [])

    const getStories = (storyIds) => {
        const top20 = storyIds.slice(0, 20);
        const storyPromises = top20.map( (storyId) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                .then(res => res.json());
        })
        
        Promise.all(storyPromises)
            .then((stories) => {
                setStories( stories );
        })

    }


    return (

        <>
        <div>
            <h1>Hacker Stories</h1>
            <Search stories={stories}/>
            {/* <StorySelect stories={stories} getStories={getStories}/>
            {selectedStory ? <StoryDetail stor={selectedStory}/> : null} */}
            <LatestStories stories={stories}/>
        </div>

        </>
    );
}


export default HackerContainer;