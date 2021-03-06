const fs = require("fs")
const path = require("path")
module.exports = async (req, res)=> {
  const WallpaperArray = fs.readdirSync(path.resolve(__dirname + "/../../Assets/Images/WallpaperBuild"))
  if(req.query.generate?.toLowerCase() == "true" && !req.query.genre){
    const genrePick = Math.floor(Math.random() * (WallpaperArray.length - 1))
    const genre = WallpaperArray[genrePick]
    const WallpapersArray = fs.readdirSync(path.resolve(__dirname + `/../../Assets/Images/WallpaperBuild/${genre}`))
    const wallpaperpick = Math.floor(Math.random() * (WallpapersArray.length - 1))
    const wallpaper = WallpapersArray[wallpaperpick]
    const wallpaperpath = path.resolve(__dirname + `/../../Assets/Images/WallpaperBuild/${genre}/${wallpaper}`)
    res.status = 200
    return res.sendFile(wallpaperpath)
  }else if(req.query.generate?.toLowerCase() == "true" && req.query.genre){
    const genreChoice = req.query.genre
    if(!fs.existsSync(path.resolve(__dirname + `/../../Assets/Images/WallpaperBuild/${genreChoice}`))){
      res.status = 404
      return res.json({
        Status: 404,
        Message: "Genre not found"
      })
    }
    const wallpaperGenreArray = fs.readdirSync(path.resolve(__dirname + `/../../Assets/Images/WallpaperBuild/${genreChoice}`))
    const wallpaperGenrePick = Math.floor(Math.random() * (wallpaperGenreArray.length - 1))
    const wallpaperGenre = wallpaperGenreArray[wallpaperGenrePick]
    const wallpaperGenrePath = path.resolve(__dirname + `/../../Assets/Images/WallpaperBuild/${genreChoice}/${wallpaperGenre}`)
    res.status = 200
    return res.sendFile(wallpaperGenrePath)
  }
  res.status = 200
    return res.json({
      Status: 200,
      Genres: WallpaperArray
    })
}