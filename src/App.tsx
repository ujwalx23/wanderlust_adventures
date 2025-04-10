
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturedPage from "./pages/FeaturedPage";
import DestinationDetail from "./pages/DestinationDetail";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import AllDestinationsPage from "./pages/AllDestinationsPage";
import ReviewsPage from "./pages/ReviewsPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import TravelQuizPage from "./pages/TravelQuizPage";
import PickTripPage from "./pages/PickTripPage";
import MoviesPage from "./pages/MoviesPage";
import MusicPage from "./pages/MusicPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import GamesPage from "./pages/GamesPage";
import SongsPage from "./pages/SongsPage";
import DownloadPage from "./pages/DownloadPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/featured/:id" element={<DestinationDetail />} />
          <Route path="/all-destinations" element={<AllDestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/travel-quiz" element={<TravelQuizPage />} />
          <Route path="/pick-a-trip" element={<PickTripPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
