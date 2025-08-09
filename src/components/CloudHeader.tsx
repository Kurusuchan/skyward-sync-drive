import { Search, Menu, User, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ThemeToggle";

interface CloudHeaderProps {
  onMenuClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CloudHeader = ({ onMenuClick, searchQuery, onSearchChange }: CloudHeaderProps) => {
  return (
    <header className="bg-card border-b border-border px-4 py-3 sticky top-0 z-40 backdrop-blur-sm bg-card/95">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="p-2 bg-primary rounded-lg shadow-cloud animate-glow">
            <Cloud className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-primary">
            SCloud Drive
          </span>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search files and folders..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-accent/50 border-border/50 focus:bg-card transition-colors"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="shrink-0">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};