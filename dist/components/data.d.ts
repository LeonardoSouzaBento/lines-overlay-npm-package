export type FieldBinding = {
    value: number;
    set: (v: number) => void;
};
export type ConfigOptionsProps = {
    lines: number;
    gap: number;
    opacity: number;
    color: string;
    setLines: (v: number) => void;
    setGap: (v: number) => void;
    setOpacity: (v: number) => void;
    setColor: (v: string) => void;
};
export type NumberFieldConfig = {
    key: 'lines' | 'gap' | 'opacity';
    label: string;
    step?: number;
    quick: number[];
};
export declare const NUMBER_FIELDS: NumberFieldConfig[];
export declare const colorOptions: {
    name: string;
    value: string;
}[];
