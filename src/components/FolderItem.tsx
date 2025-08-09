import { Folder, MoreVertical } from "lucide-react";
import { FileData } from "./FileGrid";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FolderItemProps {
  folder: FileData;
  viewMode: "grid" | "list";
}

export const FolderItem = ({ folder, viewMode }: FolderItemProps) => {
  if (viewMode === "list") {
    return (
      <div className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border hover:bg-accent/50 transition-colors group cursor-pointer">
        <Folder className="h-5 w-5 text-primary" />
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{folder.name}</p>
          <p className="text-xs text-muted-foreground">
            Folder • {folder.modifiedAt}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:bg-accent/50 transition-all group hover:shadow-card cursor-pointer">
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Folder className="h-8 w-8 text-primary" />
        </div>
        <div className="w-full">
          <p className="font-medium text-sm truncate" title={folder.name}>
            {folder.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Folder
          </p>
          <p className="text-xs text-muted-foreground">
            {folder.modifiedAt}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 h-6 w-6">
              <MoreVertical className="h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Open</DropdownMenuItem>
            <DropdownMenuItem>Rename</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};