import React, { useState, useEffect } from "react";
import HomeTemplate from "../templates/homeTemplate";
import Container from "@mui/material/Container";

export default function Home() {
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState("");
  const [cardData, setCardData] = useState({});
  const [search, setSearch] = useState("");

  async function createData(data) {
    setCardData(data);
  }

  async function getSearchValue(data) {
    await setSearch(data);
  }

  useEffect(() => {
    setCardData({});
    if (search.length >= 3) {
      const filtered = tempData.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      setData(filtered);

      console.log(filtered);
    } else {
      fetch("https://gnk.onm.mybluehost.me/products_api/")
        .then((response) => response.json())
        .then((data) => {
          const temp = data.map((item) => {
            return {
              id: item.id,
              img: item.img,
              title: item.title,
              price: dollarUS.format(item.price),
              sku: item.sku,
              description: item.description,
            };
          });
          setData(temp);
          setTempData(temp);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <Container maxWidth="xl" fixed>
      <HomeTemplate
        itemData={data}
        selectImage={createData}
        cardData={cardData}
        search={search}
        getSearchValue={getSearchValue}
        article={article}
        gallery={gallery}
        galleryImg={galleryImg}
      />
    </Container>
  );
}

const dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const article = {
  maxWidth: "100%",
  maxHeight: "600px",
  borderRadius: "20px",
  margin: "10px",
  bgcolor: "#FFFFFF",
  boxShadow: 3,
};

const gallery = {
  width: "100%",
  height: "90vh",
  borderRadius: "10px",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))!important",
  bgcolor: "#ffffff",
  margin: "0px",
  padding: "5px",
  overflowX: "hidden",
};

const galleryImg = {
  borderRadius: "10px 10px 0px 0px",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  boxShadow: 3,
  border: ".5px solid #6666",
};
