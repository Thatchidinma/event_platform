export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode;
}

export type EventType = {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
};