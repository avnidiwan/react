import react, { useEffect } from 'react'

function HomePage() {
    let[apiRecipe, setApiRecipe]=useState()
    useEffect(() => {
        fetch("https://dummyjson.com/recipes").then((res) => { return res.json() }).then((data) => {
            console.log(data.recipes);
            setApiRecipe(data.recipes)
        })
    })
    
    return (<>

    </>)
}
export default HomePage;