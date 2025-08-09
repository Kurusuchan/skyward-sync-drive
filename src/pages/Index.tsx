import { useState } from "react";
import { CloudHeader } from "@/components/CloudHeader";
import { Sidebar } from "@/components/Sidebar";
import { FileGrid, FileData } from "@/components/FileGrid";
import { useToast } from "@/hooks/use-toast";

// Sample data - in a real app this would come from an API
const sampleFiles: FileData[] = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    modifiedAt: "2 days ago"
  },
  {
    id: "2",
    name: "Photos",
    type: "folder", 
    modifiedAt: "1 week ago"
  },
  {
    id: "3",
    name: "Project Proposal.pdf",
    type: "file",
    size: "2.4 MB",
    modifiedAt: "3 hours ago",
    fileType: "application/pdf"
  },
  {
    id: "4",
    name: "Vacation Photo.jpg",
    type: "file",
    size: "5.1 MB", 
    modifiedAt: "1 day ago",
    fileType: "image/jpeg"
  },
  {
    id: "5",
    name: "Meeting Recording.mp4",
    type: "file",
    size: "124 MB",
    modifiedAt: "2 days ago",
    fileType: "video/mp4"
  },
  {
    id: "6",
    name: "Presentation.pptx",
    type: "file",
    size: "12.8 MB",
    modifiedAt: "5 days ago",
    fileType: "application/vnd.ms-powerpoint"
  }
];

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleUpload = () => {
    toast({
      title: "Upload Started",
      description: "Your files are being uploaded to SCloud Drive.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <CloudHeader
          onMenuClick={() => setSidebarOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <main className="flex-1 overflow-auto">
          <FileGrid
            files={sampleFiles}
            searchQuery={searchQuery}
            onUpload={handleUpload}
          />
        </main>
      </div>
    </div>
  );
};

export default Index;
