"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { File, MoreVertical, Download, Trash2, Share2, Eye } from "lucide-react";
import { formatBytes, formatRelativeTime, getFileIcon } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

interface FileCardProps {
  file: {
    id: string;
    name: string;
    size: number;
    mimeType: string;
    createdAt: string;
    isPublic?: boolean;
  };
  onView?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
}

export function FileCard({ file, onView, onDownload, onShare, onDelete }: FileCardProps) {
  const fileIcon = getFileIcon(file.mimeType);
  const isImage = file.mimeType.startsWith("image/");

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardContent className="p-0">
        {/* File Preview */}
        <div
          onClick={onView}
          className="relative aspect-square bg-gradient-to-br from-vault-red/10 to-vault-red-light/10 flex items-center justify-center overflow-hidden"
        >
          {isImage ? (
            <div className="w-full h-full bg-cover bg-center">
              {/* Image preview - add backgroundImage via Tailwind or img tag */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <span className="text-4xl">{fileIcon}</span>
              </div>
            </div>
          ) : (
            <span className="text-6xl" role="img" aria-label="File icon">{fileIcon}</span>
          )}
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onView?.();
              }}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full"
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                onDownload?.();
              }}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>

          {/* Public badge */}
          {file.isPublic && (
            <Badge className="absolute top-2 right-2 bg-green-500">Public</Badge>
          )}
        </div>

        {/* File Info */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium truncate text-sm">{file.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {formatBytes(file.size)} • {formatRelativeTime(file.createdAt)}
              </p>
            </div>

            {/* Actions Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 flex-shrink-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={onView}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDelete} className="text-red-600">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
