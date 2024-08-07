import { PortableText } from "@portabletext/react";
import React from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { getDataFromSanity, urlFor } from "../../../../sanity/sanity-utils";
import { ProjectData } from "../../../utils/types";

async function getData(params) {
  const data: ProjectData[] = await getDataFromSanity('Projects', true, params)
  return data[0];
}

export default async function ProjectPage({ params: { id } }: { params: { id: string } }) {
  const data = await getData(id);
  return (
    <>
      <div className="p-10 flex flex-col lg:flex-row grid-cols-2 justify-center items-center min-h-[80vh] w-full">
        <div className="px-2 sm:px-10 lg:px-5 my-5 flex justify-center items-center w-full lg:max-w-lg">
          <Image
            src={urlFor(data.image).url()}
            alt="project-image"
            width={470}
            height={380}
            className="rounded-xl w-full object-cover h-auto lg:h-[380px]"
          />
        </div>
        <div className="px-2 sm:px-10 lg:px-5 lg:w-[34rem] leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base text-slate-400 font-roboto_mono">
          <h4 className=" mb-2">{data.category}</h4>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-200 mb-5">
            {data?.name}
          </h2>
          <div className=" mb-4">
            <PortableText value={data?.description} />
          </div>
          <p className="mb-6">
            Technologies Used:
            <span>
              {data.technologies?.map(
                (item, i, arr) => ` ${item}${i + 1 !== arr.length ? "," : ""}`
              )}
            </span>
          </p>
          <Button variant="secondary">View Repo</Button>
        </div>
      </div>
    </>
  );
}
