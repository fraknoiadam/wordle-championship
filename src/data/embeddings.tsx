export interface EmbeddingItem {
  link: string;
  text: string;
  color: string;
  title: string;
}

export const embeddingsList: EmbeddingItem[] = [
  {
    link: "https://docs.google.com/spreadsheets/d/1ae9sUdlMhzYTGhWabMaJ4B9VZvnPGP_Hhs-NQ77BjY8/edit?gid=0#gid=0",
    text: "First embedding content",
    color: "#ff00ff",
    title: "First Embedding"
  },
  {
    link: "https://example.com/embed2",
    text: "Second embedding content",
    color: "#d1fae5",
    title: "Second Embedding"
  },
  {
    link: "https://example.com/embed3",
    text: "Third embedding content",
    color: "#fee2e2",
    title: "Third Embedding"
  },
  // Add more items as needed
];
