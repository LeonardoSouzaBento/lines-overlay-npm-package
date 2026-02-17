import type { LucideIcon as LucideIconType, LucideProps } from 'lucide-react';
type StrokeWidthValue = keyof typeof weights;
declare const weights: {
    thin: number;
    light: number;
    normal: number;
    semibold: number;
    bold: number;
    extrabold: number;
};
type SizeValue = keyof typeof iconSizes;
declare const iconSizes: {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    h6: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
};
interface IconProps extends Omit<LucideProps, 'size' | 'strokeWidth'> {
    Icon: LucideIconType;
    size?: SizeValue | string;
    strokeWidth?: StrokeWidthValue | string;
}
export declare const Icon: ({ Icon, size, className, strokeWidth, fill }: IconProps) => import("react/jsx-runtime").JSX.Element;
export {};
