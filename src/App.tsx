import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Index />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
        <Toaster />
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
