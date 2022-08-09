import React, {useState} from "react";
import LatestStories from "./LatestStories";


const Search = ({stories}) => {
    const [query, setQuery] = useState("")

    const searchedStories = stories.filter(story => {
        if (query === '') {
            return story;
        } else if (story.title.toLowerCase().includes(query.toLowerCase())) {
            return story
        }
    })

    return (
    <>
    <div>
        <input placeholder='Enter Query' onChange={event => setQuery(event.target.value)}/>
    </div>
    <div>
        <LatestStories searchedStories={searchedStories}/>
    </div>
    </>    
    )
}
export default Search;