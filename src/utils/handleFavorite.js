function handleFavorite(e){
    let favs = JSON.parse(localStorage.getItem("favs")) || []
    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURL = parent.querySelector("img").getAttribute("src")
    const title = parent.querySelector("h3").innerText
    const overview = parent.querySelector("p").innerText
    const id = btn.dataset.movieId

    const fav = {
        id, title, imgURL, overview
    }

    if (!favs.find(fa => fa.id == fav.id)){
        favs.push(fav)
    }else{
        let aux = favs.filter(fa => fa.id != fav.id)
        favs = [...aux]
    }

    localStorage.setItem("favs", JSON.stringify(favs))
    return favs
}

export default handleFavorite