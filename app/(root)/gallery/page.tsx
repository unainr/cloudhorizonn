import React from "react";
import UploadButton from "@/components/buttons/UploadButton";
import cloudinary from "cloudinary";
import CloudinaryImage from "@/components/CloudinaryImage";
import Link from "next/link";
import { Metadata } from "next";

interface SearchResult {
  public_id: string;
}

const Gallery = async () => {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image`)
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  const images = result.resources.map((resource) => resource.public_id);

  return (
    <section>
      <div className="flex justify-around mb-5">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <UploadButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((public_id: string) => (
          <Link href={`/edit/${public_id}`} key={public_id}>
            <CloudinaryImage public_id={public_id} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

export const metadata: Metadata = {
  title: "Gallery | Cloud Horizon",
  description: "Browse and manage your digital assets in Cloud Horizon's intuitive gallery interface",
};
