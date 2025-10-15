export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode;
}

export interface postType {
  id: number,
  title: string,
  body: string,
  userId: number
}