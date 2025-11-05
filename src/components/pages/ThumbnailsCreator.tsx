"use client";

import { useState } from "react";
import Dropzone from "./dropzone";
import Style from "./style";
import { Spinner } from "~/components/ui/spinner"
const ThumbnailsCreator = () => {
  

  const [selectedStyle,setSelectedStyle] = useState('style1');
  const [imageSrc,setImageSrc] = useState<string| null>(null);
  const [loading,setLoading] = useState(false);

  const setSelectedImage = async (file?: File) => {
    if(file){
        setLoading(true);
        const reader = new FileReader();
        reader.onload = async(e)=>{
            console.log(file)
            const src = e.target?.result as string;
            setImageSrc(src)
        }
        reader.readAsDataURL(file)
    }
  };


  return (
    <>
    {
    imageSrc ? (
            <>
            {
                loading ? (
                    <div className="flex items-center gap-6">
                   
                    <Spinner className="size-8" />
                  </div>
                ):<></>
            }

            
            </>)
            :(
            <>
            <div className="mt-10 flex flex-col">
        <h1 className="scroll-m-20 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Hi there
        </h1>
        <h2 className="mt-2 scroll-m-20 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Want to Create a thumbnail
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-lg">
          Use one of the templates below
        </p>

        <div className="mt-10 grid w-full grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Style
            image={"/photo.png"}
            selectStyle={() =>setSelectedStyle("style1")}
            isSelected={selectedStyle==="style1"}
          />
          <Style
            image={"/photo.png"}
            selectStyle={() => setSelectedStyle("style2")}
            isSelected={selectedStyle==="style2"}
          />
          <Style
            image={"/photo.png"}
            selectStyle={() => setSelectedStyle("style3")}
            isSelected={selectedStyle==="style3"}
          />
        </div>
      </div>
      <Dropzone setSelectedImage={setSelectedImage} />
            </>
        )
    }
      
    </>
  );
};

export default ThumbnailsCreator;
