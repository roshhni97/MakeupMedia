"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Search, Heart, MessageCircle, User } from "lucide-react";
import Link from "next/link";

// Helper function to generate random sizes for MU cards
const getRandomSize = () => {
  const sizes = ["small", "medium", "large"];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

// Mock data for MUs
const generateMUs = (count: number) => {
  return Array(count)
    .fill(null)
    .map((_, i) => ({
      id: i,
      imageUrl: `/placeholder.svg?height=${Math.floor(
        Math.random() * 200 + 200
      )}&width=${Math.floor(Math.random() * 200 + 200)}&text=MU ${i + 1}`,
      likes: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 50),
      user: {
        name: `User ${i + 1}`,
        avatar: `/placeholder.svg?height=40&width=40&text=U${i + 1}`,
      },
      size: getRandomSize(),
    }));
};

export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const mus = generateMUs(20); // Generate 20 random MUs

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-violet-100">
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
          >
            MakeupMedia
          </Link>
          <div className="flex items-center space-x-4 flex-1 max-w-xl mx-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search MUs..."
                className="pl-8 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/profile">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {mus.map((mu) => (
            <Card
              key={mu.id}
              className={`break-inside-avoid mb-4 hover:shadow-lg transition-shadow duration-300 ${
                mu.size === "small"
                  ? "h-[250px]"
                  : mu.size === "medium"
                  ? "h-[350px]"
                  : "h-[450px]"
              }`}
            >
              <CardContent className="p-0 h-full flex flex-col">
                <div className="relative flex-grow">
                  <img
                    src={mu.imageUrl}
                    alt={`MU ${mu.id}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Heart className="h-5 w-5" />
                          <span>{mu.likes}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-5 w-5" />
                          <span>{mu.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-2">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={mu.user.avatar} alt={mu.user.name} />
                    <AvatarFallback>{mu.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{mu.user.name}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
