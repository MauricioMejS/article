import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Skeleton from "@mui/material/Skeleton";

export default function StandardImageList(props) {
  let rHeight = "";
  if (props.itemData.length > 12) {
    rHeight = "auto";
  } else if (props.itemData.length <= 12) {
    rHeight = 400;
  }
  return (
    <ImageList
      gap={12}
      className="scrollBar"
      sx={props.gallery}
      rowHeight={rHeight}
    >
      {props.itemData ? (
        props.itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              style={props.galleryImg}
              src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
              srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              onClick={(x) => props.selectImage(item)}
              loading="lazy"
              defer
            />
            <ImageListItemBar title={item.title} subtitle={item.price} />
          </ImageListItem>
        ))
      ) : (
        <Skeleton variant="rectangular" width={210} height={118} />
      )}
    </ImageList>
  );
}
