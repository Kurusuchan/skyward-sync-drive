import { Home, FolderOpen, Star, Trash2, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StorageIndicator } from "./StorageIndicator";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "My Drive", active: true },
  { icon: FolderOpen, label: "Shared with me" },
  { icon: Star, label: "Starred" },
  { icon: Trash2, label: "Trash" },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen bg-card border-r border-border
        w-64 transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
      `}>
        <div className="p-4 border-b border-border md:hidden">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Menu</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.label}
                variant={item.active ? "secondary" : "ghost"}
                className="w-full justify-start"
              >
                <Icon className="h-4 w-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
          
          <div className="pt-4 border-t border-border mt-6">
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </Button>
          </div>
        </nav>
        
        <div className="p-4">
          <StorageIndicator />
        </div>
      </aside>
    </>
  );
};