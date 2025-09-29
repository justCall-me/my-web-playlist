# WebMusic - Modern Music Upload & Playlist Manager

A modern, responsive web application for uploading music files and creating playlists with a beautiful UI/UX design.

## Features

### 🎵 Music Management
- **Drag & Drop Upload**: Easy file upload with drag and drop interface
- **Multiple Format Support**: MP3, WAV, OGG, M4A, AAC audio formats
- **File Validation**: Automatic file type and size validation (max 50MB)
- **Metadata Extraction**: Automatic extraction of title, artist, and duration

### 🎧 Audio Player
- **Modern Controls**: Play, pause, previous, next, shuffle
- **Progress Bar**: Visual progress tracking with click-to-seek
- **Volume Control**: Adjustable volume slider
- **Time Display**: Current time and total duration
- **Responsive Design**: Works on desktop and mobile devices

### 📋 Playlist Management
- **Create Playlists**: Organize your music into custom playlists
- **Track Management**: Add, remove, and reorder tracks
- **Shuffle Mode**: Randomize track playback
- **Persistent Storage**: Playlists saved in browser localStorage

### 🎨 Modern UI/UX
- **Gradient Design**: Beautiful gradient backgrounds and buttons
- **Glass Morphism**: Modern glassmorphism effects
- **Smooth Animations**: Smooth transitions and hover effects
- **Responsive Layout**: Mobile-first responsive design
- **Dark/Light Theme**: Modern color scheme

## Project Structure

```
webmusic/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── app.js          # Frontend JavaScript
│   └── images/
│       └── default-cover.svg # Default album cover
├── api/
│   ├── upload.php          # File upload handler
│   ├── playlist.php        # Playlist management API
│   └── files.php           # File management API
├── uploads/                # Uploaded music files
├── data/
│   └── playlist.db         # SQLite database
└── README.md
```

## Installation & Setup

### Prerequisites
- Web server with PHP support (Apache, Nginx, or PHP built-in server)
- PHP 7.4 or higher
- SQLite extension enabled
- Optional: FFmpeg for advanced audio metadata extraction

### Quick Start

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd webmusic
   ```

2. **Start the development server**
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Production Setup

1. **Upload files to web server**
   - Upload all files to your web server's document root
   - Ensure PHP and SQLite are enabled

2. **Set permissions**
   ```bash
   chmod 755 uploads/
   chmod 755 data/
   chmod 644 api/*.php
   ```

3. **Configure web server**
   - Ensure `.htaccess` rules allow PHP execution
   - Set appropriate file size limits for uploads

## Usage

### Uploading Music
1. Click the "Upload Music" button or drag files to the upload area
2. Select audio files from your computer
3. Files will be automatically processed and added to your playlist

### Playing Music
1. Click on any track in the playlist to start playing
2. Use the player controls at the bottom of the screen
3. Adjust volume using the volume slider
4. Click on the progress bar to seek to a specific position

### Managing Playlists
1. Click "New Playlist" to create a custom playlist
2. Add tracks to playlists by uploading or moving existing tracks
3. Use the shuffle button to randomize playback
4. Remove tracks by clicking the trash icon

## API Endpoints

### Upload API (`/api/upload.php`)
- **POST**: Upload audio files
- **Response**: JSON with file metadata and success status

### Playlist API (`/api/playlist.php`)
- **GET**: Retrieve playlists and tracks
- **POST**: Create playlists or add tracks
- **PUT**: Update playlist information
- **DELETE**: Remove playlists or tracks

### Files API (`/api/files.php`)
- **GET**: List uploaded files
- **DELETE**: Remove files from server

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Technical Details

### Frontend
- **HTML5**: Semantic markup with modern features
- **CSS3**: Flexbox, Grid, animations, and modern styling
- **JavaScript ES6+**: Classes, async/await, modern syntax
- **LocalStorage**: Client-side data persistence

### Backend
- **PHP 7.4+**: Server-side processing
- **SQLite**: Lightweight database for playlists
- **File Upload**: Secure file handling with validation
- **Metadata Extraction**: Audio file information extraction

### Security Features
- File type validation
- File size limits
- Secure filename generation
- SQL injection prevention
- XSS protection

## Customization

### Styling
Edit `assets/css/style.css` to customize:
- Color schemes
- Layout dimensions
- Animation effects
- Typography

### Functionality
Modify `assets/js/app.js` to add:
- New player features
- Additional playlist functions
- Custom keyboard shortcuts
- Enhanced UI interactions

## Troubleshooting

### Common Issues

1. **Upload fails**
   - Check file size limits in PHP configuration
   - Ensure uploads directory has write permissions
   - Verify file format is supported

2. **Audio won't play**
   - Check browser audio codec support
   - Verify file is not corrupted
   - Try different audio format

3. **Database errors**
   - Ensure SQLite extension is enabled
   - Check data directory permissions
   - Verify PHP version compatibility

### Debug Mode
Enable PHP error reporting for debugging:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the API documentation

---

**WebMusic** - Enjoy your music with style! 🎵✨
