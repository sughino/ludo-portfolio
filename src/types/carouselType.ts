export interface CarouselType {
    id?: string,
    title: string;
    description?: string;
    img: string;
    width: number;
    height: number;
    variant?: string;
    color? : string;
    role?: 'Development only' | 'Full build' | 'Design';
}