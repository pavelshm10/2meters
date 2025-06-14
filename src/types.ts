export type Room = {
  id: number;
  title: string;
  description: string;
  comment?: string;
  images: string[];
  facilities?: { value: string; icon: string }[];
  rooms?: { name: string; value: string }[];
};
