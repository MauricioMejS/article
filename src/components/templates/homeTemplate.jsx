import React from "react";
import Article from "../UI/molecules/article";
import Gallery from "../UI/molecules/gallery";
import InternalUser from "../../layout/internalUser";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function HomeTemplate(props) {
  let ACols = 4;
  let GCols = 8;
  let article = {
    display: "none",
  };
  if (props.cardData.title === undefined) {
    ACols = 0;
    GCols = 12;
    article = {
      display: "none",
    };
  } else {
    ACols = 4;
    GCols = 8;
    article = {
      display: "flex",
    };
  }

  return (
    <Container maxWidth="xl" fixed disableGutters>
      <InternalUser
        search={props.search}
        getSearchValue={props.getSearchValue}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={ACols} style={article}>
            <Article
              maxWidth={props.article.width}
              maxHeight={props.article.height}
              borderRadius={props.article.borderRadius}
              margin={props.margin}
              padding={props.padding}
              bgcolor={props.article.bgcolor}
              boxShadow={3}
              cardData={props.cardData}
            />
          </Grid>
          <Grid item xs={12} md={GCols}>
            <Gallery
              itemData={props.itemData}
              selectImage={props.selectImage}
              gallery={props.gallery}
              galleryImg={props.galleryImg}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
