import { Progress } from "@/components/ui/progress";
import { HardDrive } from "lucide-react";

export const StorageIndicator = () => {
  const usedStorage = 15.2; // GB
  const totalStorage = 100; // GB
  const usagePercentage = (usedStorage / totalStorage) * 100;

  return (
    <div className="bg-card border border-border rounded-lg p-4 shadow-card">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-accent rounded-lg">
          <HardDrive className="h-4 w-4 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">Storage</h3>
          <p className="text-xs text-muted-foreground">
            {usedStorage} GB of {totalStorage} GB used
          </p>
        </div>
      </div>
      
      <Progress 
        value={usagePercentage} 
        className="h-2"
      />
      
      <p className="text-xs text-muted-foreground mt-2">
        {(totalStorage - usedStorage).toFixed(1)} GB available
      </p>
    </div>
  );
};