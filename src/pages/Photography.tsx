import { useState } from "react";
import { Link } from "react-router-dom";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    // { filename: "IMG_9177.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9178.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9179.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9180.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9181.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9182.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9183.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9184.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9185.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9187.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9188.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9189.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9190.JPG", alt: "Photography by Satyajeet Shinde" },
    // { filename: "IMG_9191.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9192.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9193.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9194.JPG", alt: "Photography by Satyajeet Shinde" },
    { filename: "IMG_9196.JPG", alt: "Photography by Satyajeet Shinde" },
  ];

  const openImage = (filename: string) => {
    setSelectedImage(filename);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Photography
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Capturing moments through the lens. A collection of visual stories frozen in time.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer card-hover"
                  onClick={() => openImage(photo.filename)}
                >
                  <img
                    src={`/assets/photography/${photo.filename}`}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p className="text-black text-sm font-medium text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Click to view full size
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Message */}
            {photos.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  Photo gallery coming soon. Add images to /assets/photography/ folder.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeImage}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeImage}
          >
            <X size={24} />
          </Button>
          <img
            src={`/assets/photography/${selectedImage}`}
            alt="Full size view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-6">Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interested in photography services or collaboration? Let's connect and create something beautiful.
            </p>
            <Button size="lg" className="btn-hero">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Photography;
