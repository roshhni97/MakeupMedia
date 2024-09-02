"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Edit, Grid, List, Settings, Users } from "lucide-react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("grid");

  // This would typically come from your app's state management
  const profile = {
    name: "Jane Doe",
    username: "janedoe",
    followers: 1234,
    following: 567,
    muCount: 89,
  };

  // This would be fetched from your backend
  const mus = Array(12)
    .fill(null)
    .map((_, i) => ({
      id: i,
      imageUrl: `/placeholder.svg?height=300&width=300&text=MU ${i + 1}`,
      likes: Math.floor(Math.random() * 100),
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-violet-200">
      <div className="relative h-[200px] lg:h-[300px] overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=1200&text=Cover Photo"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-violet-500/30"></div>
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 bg-white/50 hover:bg-white/70 transition-colors duration-200"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>
      <div className="container mx-auto px-4 pb-8 flex flex-col items-center">
        <Avatar className="h-32 w-32 border-4 border-background -mt-16 z-10 shadow-lg hover:scale-105 transition-transform duration-200">
          <AvatarImage
            src="/placeholder.svg?height=128&width=128&text=JD"
            alt={profile.name}
          />
          <AvatarFallback>
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">@{profile.username}</p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white transition-all duration-200 hover:shadow-lg">
            Follow
          </Button>
          <Button
            variant="outline"
            className="hover:bg-gradient-to-r hover:from-pink-200 hover:to-violet-200 transition-all duration-200"
          >
            <Settings className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
        <div className="flex gap-6 mt-6 text-muted-foreground">
          <div className="flex flex-col items-center gap-1 hover:text-foreground transition-colors duration-200 cursor-pointer">
            <Users className="h-5 w-5" />
            <span className="font-medium">{profile.followers}</span>
            <span className="text-sm">followers</span>
          </div>
          <div className="flex flex-col items-center gap-1 hover:text-foreground transition-colors duration-200 cursor-pointer">
            <Users className="h-5 w-5" />
            <span className="font-medium">{profile.following}</span>
            <span className="text-sm">following</span>
          </div>
          <div className="flex flex-col items-center gap-1 hover:text-foreground transition-colors duration-200 cursor-pointer">
            <Camera className="h-5 w-5" />
            <span className="font-medium">{profile.muCount}</span>
            <span className="text-sm">MU's</span>
          </div>
        </div>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-6 w-full max-w-3xl"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="grid"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-200"
            >
              <Grid className="h-4 w-4 mr-2" /> Grid
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white transition-all duration-200"
            >
              <List className="h-4 w-4 mr-2" /> List
            </TabsTrigger>
          </TabsList>
          <TabsContent value="grid" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mus.map((mu) => (
                <Card
                  key={mu.id}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <CardContent className="p-0 relative">
                    <img
                      src={mu.imageUrl}
                      alt={`MU ${mu.id}`}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
                      <div className="p-2 w-full text-white">
                        <p className="text-sm font-medium">MU {mu.id}</p>
                        <p className="text-xs">{mu.likes} likes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list" className="mt-6">
            <div className="space-y-4">
              {mus.map((mu) => (
                <Card
                  key={mu.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <img
                      src={mu.imageUrl}
                      alt={`MU ${mu.id}`}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium">MU {mu.id}</h3>
                      <p className="text-sm text-muted-foreground">
                        {mu.likes} likes
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
