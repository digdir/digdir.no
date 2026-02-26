import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "../lib/posts";
import { assetUrl } from "../lib/assetUrl";
import "../styles/blog-post.css";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="page">
        <h1>Innlegg ikkje funne</h1>
        <p>
          Beklagar, me fann ikkje det innlegget.{" "}
          <Link to="/blogg">Gå tilbake til bloggen</Link>
        </p>
      </div>
    );
  }

  const { Component } = post;

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("nn-NO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h1>{post.title}</h1>
        <p className="blog-post-description">{post.description}</p>
        <div className="blog-post-authors">
          <div className="blog-post-author">
            <img
              src={assetUrl("/images/authors/user1.png")}
              alt="Solveig Nordstrøm"
              className="blog-post-author-avatar"
            />
            <div className="blog-post-author-info">
              <span className="blog-post-author-name">Øyvind Thune</span>
              <span className="blog-post-author-title">Design Lead</span>
            </div>
          </div>
          <div className="blog-post-author">
            <img
              src={assetUrl("/images/authors/user2.png")}
              alt="Eirik Bakken"
              className="blog-post-author-avatar"
            />
            <div className="blog-post-author-info">
              <span className="blog-post-author-name">Vilde Ylvisåker</span>
              <span className="blog-post-author-title">Grafisk Designer</span>
            </div>
          </div>
        </div>
      </header>
      {post.image && (
        <img
          src={assetUrl(post.image)}
          alt={post.title}
          className="blog-post-hero-image"
        />
      )}
      <div className="blog-post-content">
        <Component components={{
          img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
            <img {...props} src={props.src ? assetUrl(props.src) : undefined} />
          ),
        }} />
      </div>
      <footer className="blog-post-footer">
        <Link to="/blogg">&larr; Tilbake til alle innlegg</Link>
      </footer>
    </article>
  );
}
