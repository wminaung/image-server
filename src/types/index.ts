export interface Configs {
  baseUrl: string;
  apiUrl: string;
  port: number;
}

export interface ImageUploadResponseType {
  url: string;
  path: string;
  size: number;
  filename: string;
  host: string | undefined;
  protocol: string;
}
