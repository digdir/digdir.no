import { Link } from "react-router-dom";
import { getAllPosts } from "../lib/posts";
import { assetUrl } from "../lib/assetUrl";
import "../styles/blog.css";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>Frå innsikt til nettside</h1>
        <p>
          Her deler me innlegg om korleis me utviklar og forbetrar digdir.no.
          Du finn artiklar om designval, brukartesting, justeringar me gjer
          undervegs og korleis me jobbar for å skape ei betre oppleving for
          brukarane våre.
        </p>
      </header>

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
