/// <reference types="react" />
import "./MyLabel.css";
export interface Props {
    /**
     * this is a description of the prop
     */
    label: string;
    size: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    allCaps: boolean;
    color: "primary" | "secondary" | "tertiary";
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
