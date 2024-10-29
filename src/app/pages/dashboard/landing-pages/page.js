"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function LandingPages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState(null);
  const [landingPages, setLandingPages] = useState([]);

  useEffect(() => {
    async function fetchLandingPages() {
      const response = await fetch("http://localhost:3000/landing-pages");
      const data = await response.json();
      setLandingPages(data);
    }
    fetchLandingPages();
  }, []);

  const filteredPages = landingPages.filter((page) =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Referensi Landing Page
      </h1>

      <Input
        placeholder="Cari landing page..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-6"
      />

      {filteredPages.length === 0 ? (
        <p className="text-center text-gray-500">Referensi tidak ditemukan</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPages.map((page, index) => (
            <Dialog
              key={index}
              onOpenChange={(open) => !open && setSelectedPage(null)}
            >
              <DialogTrigger asChild>
                <Card
                  className="p-4 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out"
                  onClick={() => setSelectedPage(page)}
                >
                  <h2 className="text-xl font-semibold">{page.title}</h2>
                  <p>{page.description}</p>
                </Card>
              </DialogTrigger>
              <DialogContent>
                <h3 className="text-2xl font-bold">{selectedPage?.title}</h3>
                <p>{selectedPage?.description}</p>
                {selectedPage?.preview_url && (
                  <iframe
                    src={selectedPage.preview_url}
                    title={selectedPage.title}
                    className="mt-4 w-full h-[400px] lg:h-[560px] border"
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      )}
    </div>
  );
}
