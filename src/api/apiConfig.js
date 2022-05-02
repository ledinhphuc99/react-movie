const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apikey: 'e377f93cdd0ee29880742dda0633f6b6',
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/'+ imgPath,
    w500Image: (imgPath) => 'https://image.tmdb.org/t/p/w500/'+ imgPath
}
export default apiConfig;