import React, { useState, useEffect } from 'react';
import { Music, Play, Pause, Volume2 } from 'lucide-react';

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumArt: string;
  isPlaying: boolean;
  progress: number;
  duration: number;
  url: string;
}

const SpotifyWidget: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration - replace with actual Spotify API integration
  useEffect(() => {
    const mockTrack: SpotifyTrack = {
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera",
      albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",
      isPlaying: true,
      progress: 180000, // 3 minutes in milliseconds
      duration: 355000, // 5:55 in milliseconds
      url: "https://open.spotify.com/track/example"
    };

    // Simulate API call delay
    const timer = setTimeout(() => {
      setCurrentTrack(mockTrack);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = currentTrack 
    ? (currentTrack.progress / currentTrack.duration) * 100 
    : 0;

  if (isLoading) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !currentTrack) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
        <div className="flex items-center space-x-3 text-gray-400">
          <Music size={20} />
          <span className="text-sm">Not playing anything right now</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        {/* Album Art */}
        <div className="relative flex-shrink-0">
          <img
            src={currentTrack.albumArt}
            alt={`${currentTrack.album} cover`}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {currentTrack.isPlaying ? (
              <Pause size={16} className="text-white" />
            ) : (
              <Play size={16} className="text-white" />
            )}
          </div>
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <Volume2 size={14} className="text-green-400 flex-shrink-0" />
            <p className="text-white font-medium text-sm truncate">
              {currentTrack.name}
            </p>
          </div>
          <p className="text-gray-400 text-xs truncate mb-2">
            {currentTrack.artist} • {currentTrack.album}
          </p>
          
          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="w-full bg-gray-700 rounded-full h-1">
              <div
                className="bg-gradient-to-r from-green-400 to-green-500 h-1 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{formatTime(currentTrack.progress)}</span>
              <span>{formatTime(currentTrack.duration)}</span>
            </div>
          </div>
        </div>

        {/* Spotify Logo */}
        <a
          href={currentTrack.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 text-green-400 hover:text-green-300 transition-colors duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SpotifyWidget;