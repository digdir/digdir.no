import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import "../styles/home.css";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Velkommen til sida for{" "}
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
            . Kva vi endrar, kvifor vi gjer det og kva som kjem.
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src="/images/hero-image.png" alt="Designarbeidsområde" />
          </div>
        </div>
      </section>

      <div id="posts" className="posts-section-header">
        <h2>Siste innlegg</h2>
        <div className="posts-section-line" />
      </div>

      <section className="posts-grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="post-card">
            <div className="post-card-image">
              <img src={post.image} alt={post.title} />
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
