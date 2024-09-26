import React from "react";
import { ConText_Api } from "../App";
import { useNavigate } from "react-router-dom";

const Image_Model = () => {
  const { ImageModel } = ConText_Api();
  const navigate = useNavigate();

  const Model = (Data) => (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center  flex-wrap 2xl:w-[1000px] xl:w-[1000px] lg:w-[1000px] md:w-[1000px] sm:w-[800px] w-[500px]  shadow-xl hover:border-none backdrop-blur-lg hover:shadow-[1px_4px_10px_1.5px_rgb(93,93,93)] transition-all duration-300">
          <div className="2xl:flex 2xl:flex-row 2xl:place-content-center xl:flex xl:flex-row xl:place-content-center  lg:flex lg:flex-row lg:place-content-center  md:flex md:flex-col md:place-content-center sm:flex sm:flex-col sm:place-content-center  flex flex-col place-content-center p-4">
            <div className="md:flex md:flex-row md:place-content-center sm:flex sm:flex-row sm:place-content-center flex flex-row place-content-center">
              {
                <img
                  className="2xl:h-[250px] 2xl:w-[700px] xl:h-[250px] xl:w-[700px] lg:h-[250px] lg:w-[700px]  md:h-[250px] sm:h-[250px] h-[250px]"
                  src={Data.Image}
                />
              }
            </div>

            <div className="p-8 2xl:flex 2xl:flex-col 2xl:gap-5 xl:flex xl:flex-col xl:gap-8 lg:flex lg:flex-col lg:gap-5 md:flex md:flex-col md:gap-5 sm:flex sm:flex-col sm:gap-4 flex flex-col gap-4">
              <div className="text-[#4847C1] font-semibold 2xl:text-[25px] xl:text-[25px] lg:text-[25px] md:text-[25px] sm:text-[25px] text-[25px] ">
                {Data.CompanyName}
              </div>
              <div className="font-semibold 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[20px] text-[20px] ">
                Car Name: {Data.name}
              </div>
              <div className=" text-justify md:flex md:flex-row md:place-content-center">
                {Data.Description}
              </div>
            </div>
          </div>
          <button
            className="m-2 bg-black text-white rounded-md p-2 2xl:w-[100px] xl:w-[100px] lg:w-[100px] md:w-[100px] sm:w-[100px] w-[100px]"
            onClick={() => navigate("/")}
          >
            &#8617; Back
          </button>
        </div>
      </div>
    </>
  );

  return <>{ImageModel.map((Data, index) => Model(Data))}</>;
};

export default Image_Model;
