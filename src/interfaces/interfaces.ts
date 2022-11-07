export interface Items {
  title: string,
  image: string,
  href: string
}

export type DataAppInterface = "materials" | "card" | "app" | string

// Generated by https://quicktype.io

export interface FilesCloudinaryReponse {
  files: FileCloudinary[];
}

export interface FileCloudinary {
  asset_id: string;
  public_id: string;
  format: Format;
  version: number;
  resource_type: ResourceType;
  type: Type;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: Folder;
  access_mode: AccessMode;
  url: string;
  secure_url: string;
}

export enum AccessMode {
  Public = "public",
}

export enum Folder {
  Cajica = "Cajica",
}

export enum Format {
  Jpg = "jpg",
}

export enum ResourceType {
  Image = "image",
}

export enum Type {
  Upload = "upload",
}