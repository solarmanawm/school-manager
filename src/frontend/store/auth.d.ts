export declare const useAuthStore: import("pinia").StoreDefinition<"auth", {
    isAuthenticated: boolean;
    name: string;
    uid: string;
}, {}, {
    initAuth(): Promise<void>;
    updateAuthState(isAuthenticated?: boolean, accessToken?: string, refreshToken?: string): void;
}>;
