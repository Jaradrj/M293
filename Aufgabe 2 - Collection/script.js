function redirectToSong(event) {
    var songId = event.target.closest('.container__card').id;
    if (songId === 'borderline') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else if (songId === 'creep') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else if (songId === 'dietmountaindew') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else if (songId === 'nothingelsematters') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else if (songId === 'perspectives') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else if (songId === 'wearethepeople') {
        window.location.href = "https://www.youtube.com/watch?v=2Vv-BfVoq4g";
    } else { 
        alert('Song not found');
    }
}
