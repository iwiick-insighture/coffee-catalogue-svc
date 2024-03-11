export interface ApiResponse {
  readonly success: boolean;
  readonly message: string;
  readonly data?: any;
}
