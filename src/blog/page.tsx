import { useEffect, useState } from "react";
import { Footer } from "../component/Footer.tsx";
import { Header } from "../component/Header.tsx";

interface Post {
  id: number;
  authorName: string;
  title: string;
  content: string;
  authorId: number;
  createdAt: string;
}

export const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/post");
        const result = await response.json();
        const data: Post[] = result.data;
        const message: string = result.message;
        setMessage(message);
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);
  return loading ? (
    <div>
      <Header />
      <p>Loading...</p>
      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <div>
        {message && <p>{message}</p>}
        {posts.map((post) => {
          return (
            <div key={post.id }>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>Author: {post.authorName}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};