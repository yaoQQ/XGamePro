import { create } from 'zustand'

interface AppState {
  selectedNodeId: string | null
  searchQuery: string
  activeNamespace: string | null
  activeTypeFilter: string | null

  setSelectedNode: (id: string | null) => void
  setSearchQuery: (query: string) => void
  setActiveNamespace: (ns: string | null) => void
  setActiveTypeFilter: (filter: string | null) => void
}

export const useAppStore = create<AppState>((set) => ({
  selectedNodeId: null,
  searchQuery: '',
  activeNamespace: null,
  activeTypeFilter: null,

  setSelectedNode: (id) => set({ selectedNodeId: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveNamespace: (ns) => set({ activeNamespace: ns }),
  setActiveTypeFilter: (filter) => set({ activeTypeFilter: filter }),
}))
