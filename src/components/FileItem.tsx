import { FileText, Image, Video, Music, Archive, Download, MoreVertical } from "lucide-react";
import { FileData } from "./FileGrid";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FileItemProps {
  file: FileData;
  viewMode: "grid" | "list";
}

const getFileIcon = (fileType?: string) => {
  if (!fileType) return FileText;
  
  if (fileType.includes("image")) return Image;
  if (fileType.includes("video")) return Video;
  if (fileType.includes("audio")) return Music;
  if (fileType.includes("archive")) return Archive;
  return FileText;
};

const getFileColor = (fileType?: string) => {
  if (!fileType) return "text-muted-foreground";
  
  if (fileType.includes("image")) return "text-green-500";
  if (fileType.includes("video")) return "text-purple-500";
  if (fileType.includes("audio")) return "text-orange-500";
  if (fileType.includes("archive")) return "text-yellow-500";
  return "text-blue-500";
};

export const FileItem = ({ file, viewMode }: FileItemProps) => {
  const Icon = getFileIcon(file.fileType);
  const iconColor = getFileColor(file.fileType);

  if (viewMode === "list") {
    return (
      <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-accent/50 transition-colors group">
        <Icon className={`h-5 w-5 ${iconColor}`} />
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{file.name}</p>
          <p className="text-xs text-muted-foreground">
            {file.size} • {file.modifiedAt}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Download className="h-4 w-4 mr-2" />
              Download
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:bg-accent/50 transition-all group hover:shadow-card cursor-pointer">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="p-3 bg-accent/20 rounded-lg">
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <div className="w-full">
          <p className="font-medium text-sm truncate" title={file.name}>
            {file.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {file.size}
          </p>
          <p className="text-xs text-muted-foreground">
            {file.modifiedAt}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-6 w-6">
              <MoreVertical className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Download className="h-4 w-4 mr-2" />
              Download
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};