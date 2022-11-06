var onSocket = (socket) => {
    console.log('a user has connected!');

    socket.on('disconnect', function() {
        console.log('user disconnected');
        });
}