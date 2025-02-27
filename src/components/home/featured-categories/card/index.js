import {
  alpha,
  Skeleton,
  Stack,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import CustomImageContainer from "../../../CustomImageContainer";

import { getModuleId } from "helper-functions/getModuleId";
import { btoa } from "next/dist/compiled/@edge-runtime/primitives/encoding";
import Link from "next/link";
import { CustomBoxFullWidth } from "styled-components/CustomStyles.style";
import { textWithEllipsis } from "styled-components/TextWithEllipsis";

export const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  width: "100px",
  borderRadius: "8px",
  padding: "5px",
  "&:hover": {
    boxShadow: "0px 15px 25px rgba(88, 110, 125, 0.1)",
    border: "0px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "110px",
    width: "110px",
  },
}));

const FeaturedItemCard = (props) => {
  const { image, title, id, onlyshimmer, slug } = props;
  const [hover, setHover] = useState(false);
  const classes = textWithEllipsis();
  return (
    <>
      {onlyshimmer ? (
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            cursor: "pointer",
            padding: ".5rem",
            border: (theme) =>
              `1.5px solid ${alpha(theme.palette.neutral[400], 0.2)}`,
            borderRadius: "10px",
            margin: "10px",
            "&:hover": {
              boxShadow: "0px 10px 20px rgba(88, 110, 125, 0.1)",
              border: "0px",
            },
          }}
        >
          <Card
            sx={{
              height: { xs: "80px", md: "110px" },
              width: { xs: "80px", md: "120px" },
            }}
          >
            <Skeleton
              width="100%"
              height="100%"
              variant="rectangle"
              sx={{ borderRadius: "10px" }}
            />
          </Card>
          <Skeleton width="70px" variant="text" />
        </Stack>
      ) : (
        <Link
          href={{
            pathname: "/home",
            query: {
              search: "category",
              id: id,
              module_id: `${getModuleId()}`,
              name: btoa(title),
              data_type: "category",
            },
          }}
        >
          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
              padding: ".5rem",
              cursor: "pointer",
              height: { xs: "130px", md: "155px" },
              width: { xs: "100px", md: "124px" },
              backgroundColor: (theme) => theme.palette.background.paper,
              border: (theme) =>
                `1.5px solid ${alpha(theme.palette.neutral[400], 0.2)}`,
              borderRadius: "10px",
              "&:hover": {
                boxShadow: "0px 10px 20px 0px rgba(88, 110, 125, 0.10)",
                border: "0px",
                img: {
                  transform: "scale(1.04)",
                },
              },
              div: {
                borderRadius: "8px",
                overflow: "hidden",
              },
            }}
          >
            <Stack
              sx={{
                position: "relative",
                height: { xs: "95px", md: "110px" },
                width: "100%",
              }}
            >
              <CustomImageContainer
                src={image}
                alt={title}
                height="100%"
                width="100%"
                objectFit="cover"
                loading="loading"
              />
            </Stack>
            <Tooltip
              title={title}
              placement="bottom"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: (theme) => theme.palette.toolTipColor,
                    "& .MuiTooltip-arrow": {
                      color: (theme) => theme.palette.toolTipColor,
                    },
                  },
                },
              }}
            >
              <CustomBoxFullWidth sx={{ px: "10px" }}>
                <Typography
                  textAlign="center"
                  // fontWeight="bold"
                  className={classes.singleLineEllipsis}
                  maxHeight="20px"
                  color={hover && "primary.main"}
                  component="h4"
                >
                  {title}
                </Typography>
              </CustomBoxFullWidth>
            </Tooltip>
          </Stack>
        </Link>
      )}
    </>
  );
};

export default FeaturedItemCard;
