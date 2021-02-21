/* API endpoint for spotify Login authorization */
export const authEndpoint = "https://accounts.spotify.com/authorize";

/* Redirect URI */
const redirectUri = "http://localhost:3000/";

/*Unique Client ID we get from Spotify */
const clientId = "4655ee305c524c05af38b2e164813b96";

/* Scopes are like permissions to either read/write/delete. below u dont have delete permission, but u can read what's playing, what was played */
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
     return window.location.hash.substring(1).split('&').reduce((initial, item)=> {
         let parts = item.split('=')
         initial[parts[0]] = decodeURIComponent(parts[1])

         return initial;
     }, {})
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
