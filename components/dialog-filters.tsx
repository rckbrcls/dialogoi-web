"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { mockDialogs } from "@/lib/data";
import {
  FilterState,
  defaultFilters,
  filterAndSortDialogs,
  getAllTags,
  SortOption,
} from "@/lib/filter-utils";
import { DialogCard } from "@/components/dialog-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "date-desc", label: "Recentes" },
  { value: "date-asc", label: "Antigos" },
  { value: "title-asc", label: "A-Z" },
  { value: "title-desc", label: "Z-A" },
];

export function DialogFilters() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Get all available tags
  const allTags = useMemo(() => getAllTags(mockDialogs), []);

  // Filter and sort dialogs
  const filteredDialogs = useMemo(
    () => filterAndSortDialogs(mockDialogs, filters),
    [filters]
  );

  // Check if any filter is active (not including sort)
  const hasActiveFilters =
    filters.searchText.length > 0 || filters.selectedTags.length > 0;

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Title section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Diálogos
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore as discussões mais recentes.
          </p>
        </div>

        {/* Search and sort */}
        <div className="flex items-center gap-2 mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar diálogos..."
              value={filters.searchText}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  searchText: e.target.value,
                }))
              }
              className="pl-9"
            />
          </div>

          <Select
            value={filters.sortBy}
            onValueChange={(value) =>
              setFilters((prev) => ({
                ...prev,
                sortBy: value as SortOption,
              }))
            }
          >
            <SelectTrigger className="w-32">
              <span className="flex flex-1 text-left">
                {sortOptions.find((o) => o.value === filters.sortBy)?.label}
              </span>
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {hasActiveFilters && (
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              {filteredDialogs.length}/{mockDialogs.length}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={filters.selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer transition-colors"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Dialog grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDialogs.length > 0 ? (
            filteredDialogs.map((dialog) => (
              <DialogCard key={dialog.id} dialog={dialog} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-muted-foreground">
              <p>Nenhum diálogo encontrado.</p>
              <Button
                variant="link"
                size="sm"
                onClick={clearFilters}
                className="mt-2"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
