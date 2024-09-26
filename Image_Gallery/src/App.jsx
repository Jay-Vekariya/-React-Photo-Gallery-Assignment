import React, { createContext, useContext, useEffect, useState } from "react";

//here I have used Context API to pass the data to another components.
const PostContext = createContext();
export const ConText_Api = () => useContext(PostContext);

const App = ({ children }) => {
  const IMAGE_API = "https://66f450c677b5e889709923f5.mockapi.io/Images/Images";

  const [Allimages, setAllimages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [SearchValue, SetSearchValue] = useState([]);
  const [ImageModel, setImageModel] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ImagesPerPage = 6;
  const lastIndexofPage = currentPage * ImagesPerPage;
  const firstIndexofPage = lastIndexofPage - ImagesPerPage;
  const DisplayImagesPerPage = (
    SearchValue.length > 0 ? SearchValue : Allimages
  ).slice(firstIndexofPage, lastIndexofPage);
  const CountPages = Math.ceil(
    (SearchValue.length > 0 ? SearchValue : Allimages).length / ImagesPerPage
  );
  const PageNumbers = [...Array(CountPages + 1).keys()].slice(1);

  const DataFeching = () => {
    fetch(IMAGE_API)
      .then((res) => res.json())
      .then((data) => {
        setAllimages(data);
        setLoading(false);
      })
      .catch((err) => {
        alert(
          "Error occurred while loading the Images from API \n OR \n Please, Check your Internet & Try Again..",
          err
        );
        setLoading(false);
      });
  };

  useEffect(() => {
    DataFeching();
  }, []);

  const SearchFunction = (SearchValue) => {
    const filterData = Allimages.filter((data) => {
      return `${data.name.toLowerCase()}`.includes(SearchValue.toLowerCase());
    });
    SetSearchValue(filterData);
    setCurrentPage(1);
    console.log("filtered data:", filterData);
  };

  return (
    <>
      <PostContext.Provider
        value={{
          Allimages: SearchValue.length > 0 ? SearchValue : Allimages,
          setAllimages,
          SearchFunction,
          ImageModel,
          setImageModel,
          currentPage,
          setCurrentPage,
          ImagesPerPage,
          lastIndexofPage,
          firstIndexofPage,
          DisplayImagesPerPage,
          CountPages,
          PageNumbers,
          loading,
          setLoading,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};

export default App;
