import { create } from "zustand";
type Theme = "light" | "purple" | "cyan" | "blue" | "dark";
interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));

export default useThemeStore;
