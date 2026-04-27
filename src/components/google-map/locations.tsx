export type Location = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

export const center = {
    lat: 20.5937,
    lng: 78.9629,
};

export const locationsData: Location[] = [
  {
    id: 1,
    name: "New York",
    lat: 40.7128,
    lng: -74.0060,
  },
  {
    id: 2,
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 3,
    name: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
  },
];