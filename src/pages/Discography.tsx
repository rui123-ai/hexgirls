import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

interface Album {
  id: number;
  title: string;
  description: string;
  highlight: string;
  coverImage: string;
  tracks: string[];
}

const albums: Album[] = [
  {
    id: 1,
    title: "Blood Moon Ritual",
    description: "Som cru, riffs incendiários, caos puro",
    highlight: "Witchfire",
    coverImage: "/assets/albums/blood-moon.jpg",
    tracks: [
      "Witchfire",
      "Eclipse of the Soul",
      "Blood Moon Rising",
      "Ritual of Shadows",
      "Cursed Chant"
    ]
  },
  {
    id: 2,
    title: "Coven Code",
    description: "Synthpunk com batidas ritualísticas e poesia eletrificada",
    highlight: "Digital Hex",
    coverImage: "/assets/albums/coven-code.jpg",
    tracks: [
      "Digital Hex",
      "Binary Spell",
      "Code of the Coven",
      "Digital Demons",
      "Cyber Witch"
    ]
  },
  {
    id: 3,
    title: "Hell in High Heels",
    description: "Glam punk agressivo, acidez sonora, letras como facadas",
    highlight: "Leather Cross",
    coverImage: "/assets/albums/hell-heels.jpg",
    tracks: [
      "Leather Cross",
      "Hell's Fashion",
      "Stiletto Stigmata",
      "Runway to Hell",
      "Fashion Victim"
    ]
  },
  {
    id: 4,
    title: "Void Sirens",
    description: "Um cântico apocalíptico envolto em névoa eletrônica",
    highlight: "Chant of Ashes",
    coverImage: "/assets/albums/void-sirens.jpg",
    tracks: [
      "Chant of Ashes",
      "Void Call",
      "Siren's Song",
      "Apocalypse Now",
      "Digital Void"
    ]
  }
];

const Discography: React.FC = () => {
  const [playingAlbum, setPlayingAlbum] = React.useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-hex-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-gothic text-hex-neon mb-4">
            O LIVRO DAS CANÇÕES
          </h1>
          <div className="w-24 h-1 bg-hex-red mx-auto" />
        </motion.div>

        {/* Albums Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-hex-gray/30 rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hex-black to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-gothic text-hex-neon mb-2">
                    {album.title}
                  </h3>
                  <p className="text-hex-purple text-sm mb-2">
                    {album.description}
                  </p>
                  <p className="text-hex-red text-sm">
                    Destaque: {album.highlight}
                  </p>
                </div>
              </div>

              {/* Track List */}
              <div className="p-4">
                <ul className="space-y-2">
                  {album.tracks.map((track, trackIndex) => (
                    <motion.li
                      key={trackIndex}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: trackIndex * 0.1 }}
                      className="flex items-center justify-between text-gray-300 hover:text-hex-neon transition-colors duration-200"
                    >
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-hex-red rounded-full mr-2" />
                        {track}
                      </span>
                      <button
                        onClick={() => setPlayingAlbum(playingAlbum === album.id ? null : album.id)}
                        className="text-hex-purple hover:text-hex-neon transition-colors duration-200"
                      >
                        {playingAlbum === album.id ? <FaPause /> : <FaPlay />}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Discography; 