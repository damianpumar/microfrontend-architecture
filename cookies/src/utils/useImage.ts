export const useImage = (relativePath: string) => {
	return new URL(relativePath, import.meta.url).href;
};
