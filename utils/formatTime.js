export default function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60); // get the number of minutes
    const remainingSeconds = seconds % 60; // get the remaining seconds
    const formattedMinutes = String(minutes).padStart(2, '0'); // format the minutes to two digits
    const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // format the seconds to two digits
    return `${formattedMinutes}:${formattedSeconds}`; // return the formatted string

}