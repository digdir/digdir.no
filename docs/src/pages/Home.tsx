import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import { assetUrl } from "../lib/assetUrl";
import "../styles/home.css";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Velkommen inn til oss i {" "}
            <span className="hero-highlight">digdir.no</span>-teamet
          </h1>
          <p>
            Her deler vi korleis vi jobbar med{" "}
            <span className="hero-highlight">digdir.no</span>,{" "}
            <span className="hero-highlight" style={{ color: "#95227D" }}>
              uutilsynet.no
            </span>{" "}
            og{" "}
            <span className="hero-highlight" style={{ color: "#252525" }}>
              samarbeid.digdir.no
            </span>
            . Kva vi endrar, kvifor vi gjer det og kva som kjem. Vi håpar det kan vere nyttig for andre som jobbar med offentlege nettsider, og at det kan bidra til meir openheit rundt arbeidet vårt.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={assetUrl("/images/hero-image.png")} alt="Designarbeidsområde" />
          </div>
        </div>
      </section>

      <div id="posts" className="posts-section-header">
        <h2>Siste blogginnlegg</h2>
        <div className="posts-section-line" />
      </div>

      <section className="posts-grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="post-card">
            <div className="post-card-image">
              <img src={assetUrl(post.image)} alt={post.title} />
            </div>
            <div className="post-card-content">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("nn-NO", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
