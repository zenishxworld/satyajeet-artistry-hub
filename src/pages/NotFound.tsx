import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="btn-hero">
            <Link to="/" className="flex items-center space-x-2">
              <Home size={20} />
              <span>Return Home</span>
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="btn-ghost" onClick={() => window.history.back()}>
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg">
          <h3 className="font-semibold mb-2">Looking for something specific?</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/about" className="text-primary hover:underline text-sm">About</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/filmography" className="text-primary hover:underline text-sm">Filmography</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/music" className="text-primary hover:underline text-sm">Music</Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-primary hover:underline text-sm">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
