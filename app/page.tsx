"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const handleStartClick = () => {
    router.push("/games")
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg floating-3d animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full floating-3d animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl floating-3d animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg floating-3d animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="text-center space-y-12 glass-morphism p-16 rounded-3xl floating-3d platform-3d">
        <h1 className="text-7xl md:text-9xl font-bold text-foreground tracking-tight text-3d bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Game Zone
        </h1>
        <Button
          onClick={handleStartClick}
          size="lg"
          className="px-16 py-8 text-2xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl floating-3d border-0"
        >
          Start Adventure
        </Button>
      </div>
    </main>
  )
}
