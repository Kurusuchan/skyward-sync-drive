import { useState } from "react";
import { FileItem } from "./FileItem";
import { FolderItem } from "./FolderItem";
import { Grid, List, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface FileData {
  id: string;
  name: string;
  type: "file" | "folder";
  size?: string;
  modifiedAt: string;
  fileType?: string;
}

interface FileGridProps {
  files: FileData[];
  searchQuery: string;
  onUpload: () => void;
}

export const FileGrid = ({ files, searchQuery, onUpload }: FileGridProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">My Files</h2>
        <div className="flex items-center gap-2">
          <Button
            onClick={onUpload}
            className="bg-primary hover:bg-primary/90 shadow-cloud"
          >
            <Plus className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <div className="flex border border-border rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {filteredFiles.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-accent/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Plus className="h-8 w-8 text-accent-foreground" />
          </div>
          <h3 className="font-semibold mb-2">No files found</h3>
          <p className="text-muted-foreground mb-4">
            {searchQuery ? "Try adjusting your search" : "Upload your first file to get started"}
          </p>
          {!searchQuery && (
            <Button onClick={onUpload} className="bg-primary hover:bg-primary/90 shadow-cloud">
              <Plus className="h-4 w-4 mr-2" />
              Upload Files
            </Button>
          )}
        </div>
      ) : (
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            : "space-y-2"
        }>
          {filteredFiles.map((file) => (
            file.type === "folder" ? (
              <FolderItem key={file.id} folder={file} viewMode={viewMode} />
            ) : (
              <FileItem key={file.id} file={file} viewMode={viewMode} />
            )
          ))}
        </div>
      )}
    </div>
  );
};