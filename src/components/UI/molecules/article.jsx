import React from "react";
import Image from "../atoms/generalImage";
import Label from "../atoms/generalLabel";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

export default function Article(props) {
  const style = {
    maxWidth: props.width,
    borderRadius: props.borderRadius,
    padding: props.padding,
    bgcolor: props.bgcolor,
    boxShadow: 3,
    opacity: 1,
    transition: "opacity 700ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    maxHeight: "90vh",
    overflow: "auto",
    background: 'linear-gradient(to right bottom, rgb(0, 127, 255), rgb(0, 89, 178) 120%)',
    margin: '0px 20px',
  };
  return (
    <Container fixed disableGutters>
      <Card sx={style}>
        <Image
          urlImage={props.cardData.img}
          height="auto"
          borderRadius="10px"
          margin="10px"
          padding="10px"
          alt={props.cardData.title}
        />
        <Label
          text={props.cardData.title}
          fontSize="22px"
          color="#FFFFFF"
          margin="10px"
          padding="10px"
        />
        <Label
          text={props.cardData.sku}
          fontSize="12px"
          color="#FFFFFF"
          margin="10px"
          padding="10px"
        />
        <Label
          text={props.cardData.description}
          fontSize="17px"
          color="#FFFFFF"
          margin="10px"
          padding="10px"
        />
        <Label
          title="Precio"
          text={props.cardData.price}
          fontSize="20px"
          color="#FFFFFF"
          margin="10px"
          padding="10px"
        />
      </Card>
    </Container>
  );
}
