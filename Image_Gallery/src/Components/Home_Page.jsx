import React, { useEffect } from "react";
import { ConText_Api } from "../App";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Home_Page = () => {
  const navigate = useNavigate();

  const {
    SearchFunction,
    setImageModel,
    currentPage,
    setCurrentPage,
    DisplayImagesPerPage,
    CountPages,
    PageNumbers,
    loading,
    setLoading,
  } = ConText_Api();

  const PreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const ChangeCurrentPage = (id) => {
    setCurrentPage(id);
  };
  const NextPage = () => {
    if (currentPage !== CountPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    if (DisplayImagesPerPage.length > 0) {
      setLoading(false);
    }
  }, [DisplayImagesPerPage]);

  const Home_Page = (data) => (
    <>
      {
        <div className="m-16 shadow-xl hover:border-none backdrop-blur-lg hover:shadow-[1px_4px_10px_1.5px_rgb(93,93,93)] transition-all duration-300 rounded-md">
          <div
            key={data.id}
            onClick={(e) => {
              setImageModel([data]);
              navigate("/Image_Model");
            }}
          >
            <img
              src={data.Image}
              alt={data.name}
              loading="lazy"
              className="2xl:h-[250px]"
            />
            <p className="text-center font-semibold 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[20px] text-[18px]">
              {data.name}
            </p>
          </div>
        </div>
      }
    </>
  );

  if (loading) {
    return (
      <div className="text-center mt-[300px] font-semibold 2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[50px] sm:text-[40px] text-[40px]">
        <p>Loding...</p>
        {/* here i have use the loading indicator*/}
        <PropagateLoader />
      </div>
    );
  }

  return (
    <>
      <nav className=" flex-wrap items-center justify-between 2xl:flex 2xl:flex-row 2xl:gap-x-40 xl:flex xl:flex-row xl:px-40 lg:flex lg:flex-row lg:px-40 md:flex md:flex-row md:gap-4 md:px-28 sm:flex sm:flex-col sm:gap-4 sm:px-30 flex flex-col gap-4 px-30">
        <h1 className="text-center font-semibold text-[#4847C1] 2xl:text-[40px] xl:text-[40px] lg:text-[40px] md:text-[35px] sm:text-[35px] text-[30px] cursor-pointer">
          Image Gallery
        </h1>
        <input
          type="text"
          onChange={(e) => SearchFunction(e.target.value)}
          placeholder="Browse and search for images..."
          className="p-3 placeholder:text-[#4847C1] border-[#4847C1] text-center border-[2px] rounded-md hove:border-white hover:border-[#4847C1] 2xl:h-[35px] 2xl:w-[250px] xl:w-[250px] xl:h-[35px] lg:w-[250px] lg:h-[35px] md:w-[250px] md:h-[35px] sm:w-[250px] sm:h-[35px] w-[250px] h-[35px] shadow-xl hover:border-none backdrop-blur-lg hover:shadow-[1px_4px_10px_1.5px_rgb(93,93,93)] transition-all duration-300"
        />
      </nav>

      {
        <div className="grid grid-rows-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2 2xl:grid-cols-3 2xl:grid-rows-2 2xl:gap-1">
          {DisplayImagesPerPage.map((data) => Home_Page(data))}
        </div>
      }
      <footer>
        <ul className="flex-wrap 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-row  flex flex-row gap-8 place-content-center items-center">
          <li>
            <a
              href=""
              onClick={PreviousPage}
              className=" bg-[#4847C1] text-white p-2"
            >
              Previous
            </a>
          </li>
          {PageNumbers.map((number, index) => (
            <li
              key={index}
              onClick={() => ChangeCurrentPage(number)}
              className={`cursor-pointer ${
                currentPage === number
                  ? "bg-[#4847C1] text-white p-2 rounded"
                  : ""
              }`}
            >
              {number}
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={NextPage}
              className=" bg-[#4847C1] text-white p-2"
            >
              Next
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Home_Page;
