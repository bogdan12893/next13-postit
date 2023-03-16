"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthPostsType } from "../types/AuthPosts";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading, error } = useQuery<AuthPostsType>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading....";
  console.log(data);
  return (
    <div>
      {data?.posts?.map((post) => (
        <EditPost
          id={post.id}
          key={post.id}
          avatar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
