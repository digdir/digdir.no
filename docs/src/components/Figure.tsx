import { assetUrl } from "../lib/assetUrl";
import "../styles/figure.css";

interface FigureProps {
  src: string;
  alt: string;
  caption: string;
}

export default function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="figure">
      <img src={assetUrl(src)} alt={alt} className="figure-img" />
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}
