import { Header } from  "../Component/Header";
import { Footer } from  "../Component/Footer";
import { useEffect, useState } from "react";

interface Post{
    id: number;
    body: string;
    userId: number;
}
export const Blog = () => {
    const [posts, setPosts]= useState<Post[]>([]);
    const [loading, setLoading ]

    useEffect{() => {
        const fetchPosts = async () => {
            try{
                const response = await fetch("http:/localhost:3000/api/post"),
                const data = await response.json();
                const data: post[] = result.data;
                setPosts(data);
            } catch(error) {
                console.error("Error fetching posts:". error);
            }
        };
        fetchPosts();
    }, ([posts]);
    return(

   <div>
     <Header />

        <h1>blog</h1>
        <p>Blog page</p>
        <Footer/>
   </div>
    );
}