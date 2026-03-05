export interface WorkType {
    id: string;
    title: string;
    description: string;
    img: string;
    width: number;
    height: number;
    color : string;
    role: 'Development only' | 'Full build' | 'Design';
    longDescription: string;
    images: string[];
    techStack: {
        frontEnd?: string[],
        backEnd?: string[],
        database?: string[],
        design?: string[]
    };
    keyFeatures: Record<string, string>;
}