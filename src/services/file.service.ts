import apiClient, { handleApiError } from './api';
import { File, Folder, ApiResponse, PaginatedResponse, FileUploadResponse, StorageStats } from '@/types';

export const fileService = {
  // Get all files
  async getFiles(folderId?: string, page = 1, limit = 20): Promise<PaginatedResponse<File>> {
    try {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<File>>>('/files', {
        params: { folderId, page, limit },
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get single file
  async getFile(fileId: string): Promise<File> {
    try {
      const response = await apiClient.get<ApiResponse<File>>(`/files/${fileId}`);
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Upload file
  async uploadFile(file: globalThis.File, folderId?: string): Promise<FileUploadResponse> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (folderId) {
        formData.append('folderId', folderId);
      }

      const response = await apiClient.post<ApiResponse<FileUploadResponse>>(
        '/files/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete file
  async deleteFile(fileId: string): Promise<void> {
    try {
      await apiClient.delete(`/files/${fileId}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Download file
  async downloadFile(fileId: string): Promise<Blob> {
    try {
      const response = await apiClient.get(`/files/${fileId}/download`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get file download URL
  getDownloadUrl(fileId: string): string {
    return `${process.env.NEXT_PUBLIC_API_URL}/files/${fileId}/download`;
  },

  // Search files
  async searchFiles(query: string, page = 1, limit = 20): Promise<PaginatedResponse<File>> {
    try {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<File>>>('/files/search', {
        params: { query, page, limit },
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get storage stats
  async getStorageStats(): Promise<StorageStats> {
    try {
      const response = await apiClient.get<ApiResponse<StorageStats>>('/files/storage-stats');
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Toggle file visibility
  async toggleFileVisibility(fileId: string, isPublic: boolean): Promise<File> {
    try {
      const response = await apiClient.patch<ApiResponse<File>>(`/files/${fileId}/visibility`, {
        isPublic,
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};

export const folderService = {
  // Get all folders
  async getFolders(parentId?: string): Promise<Folder[]> {
    try {
      const response = await apiClient.get<ApiResponse<Folder[]>>('/folders', {
        params: { parentId },
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create folder
  async createFolder(name: string, parentId?: string): Promise<Folder> {
    try {
      const response = await apiClient.post<ApiResponse<Folder>>('/folders', {
        name,
        parentId,
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete folder
  async deleteFolder(folderId: string): Promise<void> {
    try {
      await apiClient.delete(`/folders/${folderId}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Rename folder
  async renameFolder(folderId: string, name: string): Promise<Folder> {
    try {
      const response = await apiClient.patch<ApiResponse<Folder>>(`/folders/${folderId}`, {
        name,
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};
