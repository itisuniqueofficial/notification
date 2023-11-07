self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'https://cdn.jsdelivr.net/gh/itisuniqueofficial/itisuniqueofficial@main/It%20Is%20Unique%20Official.webp', // Your main icon URL
        badge: 'https://cdn.jsdelivr.net/gh/itisuniqueofficial/icon@main/android-icon-48x48.png', // Your badge icon URL
    };

    event.waitUntil(
        self.registration.showNotification('New Post Alert', options)
    );
});