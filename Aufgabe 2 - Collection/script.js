function redirectToSong(event) {
    event.preventDefault();
    var songId = event.target.closest('.container__card').id;
    if (songId === 'borderline') {
        window.location.href = "https://www.youtube.com/watch?v=2g5xkLqIElU";
    } else if (songId === 'creep') {
        window.location.href = "https://www.youtube.com/watch?v=XFkzRNyygfk";
    } else if (songId === 'dietmountaindew') {
        window.location.href = "https://www.youtube.com/watch?v=sEetXo3R-aM";
    } else if (songId === 'nothingelsematters') {
        window.location.href = "https://www.youtube.com/watch?v=tAGnKpE4NCI";
    } else if (songId === 'perspectives') {
        window.location.href = "https://www.youtube.com/watch?v=wtrixPKv5Gw";
    } else if (songId === 'wearethepeople') {
        window.location.href = "https://www.youtube.com/watch?v=hN5X4kGhAtU";
    } else { 
        alert('Song not found');
    }
}
