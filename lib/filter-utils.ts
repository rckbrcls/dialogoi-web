import { Dialog } from "./data";

export type SortOption = "date-desc" | "date-asc" | "title-asc" | "title-desc";

export interface FilterState {
  searchText: string;
  selectedTags: string[];
  selectedParticipants: string[];
  sortBy: SortOption;
}

export const defaultFilters: FilterState = {
  searchText: "",
  selectedTags: [],
  selectedParticipants: [],
  sortBy: "date-desc",
};

/**
 * Filters and sorts dialogs based on the given filter state
 */
export function filterAndSortDialogs(
  dialogs: Dialog[],
  filters: FilterState
): Dialog[] {
  let result = [...dialogs];

  // Filter by search text (title and summary)
  if (filters.searchText.trim()) {
    const query = filters.searchText.toLowerCase().trim();
    result = result.filter(
      (d) =>
        d.title.toLowerCase().includes(query) ||
        d.summary.toLowerCase().includes(query)
    );
  }

  // Filter by selected tags (OR logic - matches any selected tag)
  if (filters.selectedTags.length > 0) {
    result = result.filter((d) =>
      d.tags?.some((tag) => filters.selectedTags.includes(tag))
    );
  }

  // Filter by selected participants (OR logic - matches any selected participant)
  if (filters.selectedParticipants.length > 0) {
    result = result.filter((d) =>
      d.participants.some((p) => filters.selectedParticipants.includes(p.id))
    );
  }

  // Sort
  result.sort((a, b) => {
    switch (filters.sortBy) {
      case "date-desc":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "date-asc":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "title-asc":
        return a.title.localeCompare(b.title, "pt-BR");
      case "title-desc":
        return b.title.localeCompare(a.title, "pt-BR");
      default:
        return 0;
    }
  });

  return result;
}

/**
 * Extracts all unique tags from a list of dialogs
 */
export function getAllTags(dialogs: Dialog[]): string[] {
  const tags = new Set<string>();
  dialogs.forEach((d) => d.tags?.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

/**
 * Extracts all unique participants from a list of dialogs
 */
export function getAllParticipants(
  dialogs: Dialog[]
): { id: string; name: string }[] {
  const participants = new Map<string, string>();
  dialogs.forEach((d) =>
    d.participants.forEach((p) => participants.set(p.id, p.name))
  );
  return Array.from(participants.entries())
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}
