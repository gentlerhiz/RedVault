"use client";

import { Progress } from "./ui/progress";
import { formatBytes } from "@/lib/utils";
import { HardDrive } from "lucide-react";

interface StorageBarProps {
  used: number;
  limit: number;
}

export function StorageBar({ used, limit }: StorageBarProps) {
  const percentage = (used / limit) * 100;
  const isNearLimit = percentage > 80;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <HardDrive className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">Storage</span>
        </div>
        <span className="text-muted-foreground">
          {formatBytes(used)} / {formatBytes(limit)}
        </span>
      </div>

      <div className="space-y-1">
        <Progress 
          value={percentage} 
          className="h-2"
          indicatorClassName={isNearLimit ? "bg-destructive" : "bg-vault-red"}
        />
        <p className="text-xs text-muted-foreground text-right">
          {percentage.toFixed(1)}% used
          {isNearLimit && " - Consider upgrading"}
        </p>
      </div>
    </div>
  );
}
