export function formatDescription(description: string): string[] {
  return description
    .split(".")
    .filter((sentence) => sentence.trim().length > 0);
}
