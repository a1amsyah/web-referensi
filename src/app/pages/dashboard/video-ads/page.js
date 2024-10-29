"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ReactPlayer from "react-player";

export default function VideoAds() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoAds, setVideoAds] = useState([]);

  useEffect(() => {
    async function fetchVideoAds() {
      const response = await fetch("http://localhost:3000/video-ads");
      const data = await response.json();

      // Format video URLs sebagai array
      const formattedData = data.map((item) => ({
        ...item,
        videoUrls: [
          item.video_url_1,
          item.video_url_2,
          item.video_url_3,
        ].filter(Boolean),
      }));

      setVideoAds(formattedData);
    }
    fetchVideoAds();
  }, []);

  const filteredProducts = videoAds.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Referensi Video Iklan
      </h1>

      <Input
        placeholder="Cari video iklan..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Dialog
              key={index}
              onOpenChange={(open) => !open && setSelectedVideo(null)}
            >
              <DialogTrigger asChild>
                <Card
                  className="p-4 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={() => setSelectedVideo(product)}
                >
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                  <p>{product.description}</p>
                </Card>
              </DialogTrigger>
              <DialogContent className="w-[800px] h-[550px] max-w-full">
                <h3 className="text-2xl font-bold">{selectedVideo?.title}</h3>
                <p>{selectedVideo?.description}</p>

                <div className="mt-4 overflow-y-auto">
                  {selectedVideo?.videoUrls.map((url, idx) => (
                    <div key={idx} className="mb-4">
                      <ReactPlayer
                        url={url}
                        controls
                        width="100%"
                        height="100%"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))
        ) : (
          <div className="col-span-full text-center text-grey-500">
            Referensi tidak ditemukan
          </div>
        )}
      </div>
    </div>
  );
}
