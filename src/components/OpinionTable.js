import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const OpinionTable = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPosts = async () => {
    const url = `https://docenmyztm-worker.santosubito.workers.dev/api/verifiedposts`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);

      console.log(posts);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  const Post = ({ author, text, isVerified }) => {
    return (
      <Box sx={{ minWidth: 275, margin: "15px" }}>
        <Card variant="outlined">
          {" "}
          <CardContent>
            <Typography variant="h5" component="div">
              {author} ({isVerified ? "✅" : ""})
            </Typography>
            <Typography variant="body2">{text}</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <Box
      id="placeholder"
      sx={{
        height: "100%",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        boxShadow: 24,
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100%, 1fr))",
            gap: "2px",
          }}
        >
          {posts.map((post) => (
            <Post
              key={post.PostId}
              author={post.Author}
              text={post.PostText}
              isVerified={post.IsVerified}
            />
          ))}
        </div>
      )}
    </Box>
  );
};
export default OpinionTable;
