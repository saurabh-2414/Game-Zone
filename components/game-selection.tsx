"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Star, Users, Clock, X } from "lucide-react"

interface Game {
  id: string
  title: string
  genre: string
  rating: number
  players: string
  duration: string
  image: string
  description: string
  gameType: string
  featured?: boolean
}

const games: Game[] = [
  {
    id: "1",
    title: "Escape The Lava",
    genre: "Adventure",
    gameType: "Solo/Team",
    rating: 4.8,
    players: "1-6",
    duration: "15-25 min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/escapeTheLava.jpg-2YDd83DhACKuelzkbXATZdPLT5jbPO.jpeg",
    description: "Race against time to escape the rising lava in this thrilling adventure game.",
    featured: true,
  },
  {
    id: "2",
    title: "Find The Color",
    genre: "Puzzle",
    gameType: "Competition",
    rating: 4.6,
    players: "1-6",
    duration: "10-20 min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/findTheColor.jpg-D4umjNhN22ygIlPAo7sqN6MNuBrbi2.jpeg",
    description: "Test your visual skills and speed in this competitive color-matching challenge.",
  },
  {
    id: "3",
    title: "Red Light Green Light",
    genre: "Action",
    gameType: "Competition",
    rating: 4.7,
    players: "1-4",
    duration: "5-15 min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/redLightGreenLight.jpg-I4joDIB7rtS6jdU4y7gEYfQdikPSo6.jpeg",
    description: "The classic childhood game reimagined with competitive multiplayer action.",
  },
  {
    id: "4",
    title: "Sharp Shooter",
    genre: "Arcade",
    gameType: "Competition",
    rating: 4.5,
    players: "1-4",
    duration: "10-20 min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sharpShooter.jpg-t57AyVRpgxYG9Q2LfjxcSkGjxb9OTQ.jpeg",
    description: "Test your aim and precision in this fast-paced competitive shooting game.",
  },
]

export function GameSelection() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)
  const [openImageModal, setOpenImageModal] = useState<Game | null>(null)

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId)
  }

  const handlePlayGame = (game: Game) => {
    console.log(`Starting game: ${game.title}`)
    // Game launch logic would go here
  }

  const handleImageClick = (game: Game, e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenImageModal(game)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl floating-3d animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full floating-3d animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-3xl floating-3d animate-pulse"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="absolute bottom-16 right-32 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-xl floating-3d animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <header className="glass-morphism border-b border-border/30">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center floating-3d">
                <Play className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground text-3d">GameHub</h1>
            </div>
            <Button
              variant="outline"
              className="glass-morphism border-border/30 hover:bg-accent/50 floating-3d bg-transparent"
            >
              Profile
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-3d bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Game Zone
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Select from our collection of immersive gaming experiences
          </p>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <Card
              key={game.id}
              className={`group relative overflow-hidden glass-morphism border-border/30 hover:bg-accent/30 transition-all duration-500 cursor-pointer floating-3d ${
                selectedGame === game.id ? "ring-2 ring-primary shadow-2xl" : ""
              } ${game.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
              onClick={() => handleGameSelect(game.id)}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer rounded-t-2xl"
                  onClick={(e) => handleImageClick(game, e)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-2xl" />

                {/* Featured Badge */}
                {game.featured && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium floating-3d">
                    Featured
                  </div>
                )}

                {/* Play Button Overlay */}
                {(hoveredGame === game.id || selectedGame === game.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-500 rounded-t-2xl">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white floating-3d border-0 px-8 py-4"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayGame(game)
                      }}
                    >
                      <Play className="h-6 w-6 mr-3" />
                      Play Now
                    </Button>
                  </div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 text-3d">{game.title}</h3>
                    <p className="text-primary text-base font-semibold">{game.gameType}</p>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="text-base font-semibold text-foreground">{game.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-base mb-6 leading-relaxed">{game.description}</p>

                <div className="flex items-center gap-6 text-base text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{game.duration}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Selected Game Info */}
        {selectedGame && (
          <div className="mt-12 p-8 glass-morphism border border-border/30 rounded-2xl floating-3d">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 text-3d">
                  Ready to play {games.find((g) => g.id === selectedGame)?.title}?
                </h3>
                <p className="text-muted-foreground text-lg">Click the play button to start your adventure</p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white floating-3d border-0 px-8 py-4"
                onClick={() => {
                  const game = games.find((g) => g.id === selectedGame)
                  if (game) handlePlayGame(game)
                }}
              >
                <Play className="h-6 w-6 mr-3" />
                Launch Game
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {openImageModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <div className="relative max-w-5xl max-h-[90vh] w-full floating-3d">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-16 right-0 text-white hover:bg-white/20 floating-3d"
              onClick={() => setOpenImageModal(null)}
            >
              <X className="h-8 w-8" />
            </Button>
            <img
              src={openImageModal.image || "/placeholder.svg"}
              alt={openImageModal.title}
              className="w-full h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl">
              <h3 className="text-3xl font-bold text-white mb-3 text-3d">{openImageModal.title}</h3>
              <p className="text-white/90 text-lg">{openImageModal.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
