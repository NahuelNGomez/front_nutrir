import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "@styles/components/utils";
import React from "react";

const SkeletonPoll = () => {
  return (
    <Box sx={styles.poll.skeleton}>
      <Skeleton
        variant={"text"}
        animation={"wave"}
        sx={{ fontSize: "16px", width: "40%" }}
      />
      <Skeleton
        variant={"text"}
        animation={"wave"}
        sx={{ fontSize: "12px", width: "30%" }}
      />
      <Skeleton
        variant={"rectangular"}
        animation={"wave"}
        height="40%"
        width="95%"
      />
      <Skeleton
        variant={"text"}
        animation={"wave"}
        sx={{ fontSize: "12px", width: "20%" }}
      />
    </Box>
  );
};

export default SkeletonPoll;
