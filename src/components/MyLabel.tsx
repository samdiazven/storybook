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

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps,
  fontColor,
}: Props) => {
  return (
    <span
      className={[`${size}`, `text-${color}`, allCaps ? "all-caps" : ""].join(
        " "
      )}
      style={{ color: fontColor }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
