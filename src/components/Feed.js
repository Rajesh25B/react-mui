import { Box, Container } from "@mui/material";
import HomeCard from "./HomeCard";

export function Feed() {
  return (
    <Box flex={3} p={1}>
      <HomeCard
        img={
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80"
        }
        src={
          "https://lh3.googleusercontent.com/p/AF1QipNy1rROm72wUAbgz1OT3bGjWqDQDnE4urAsvkJl=s1360-w1360-h1020"
        }
        title={"Italian Espresso-based Coffee Drink"}
      />
      <HomeCard
        img={
          "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        src={
          "https://sites.google.com/site/tshistrocicalplaces/_/rsrc/1482968786174/kakatiya-kala-thoranam/warangal-e1422526175554.jpg"
        }
        title={
          "Spanish Cappuccino made with fine-grained roasted coffee beans."
        }
      />
    </Box>
  );
}
