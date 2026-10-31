export function create_image_map(images: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(images).map(([path, url]) => [
      path.split('/').pop()!,
      url,
    ])
  );
}