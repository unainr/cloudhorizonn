import React from 'react';
import GenerativeFill from '@/components/effects/GenerativeFill';
import { Metadata } from 'next';

interface EditPageProps {
  params: {
    id: string;
  };
}

const EditPage = ({ params }: EditPageProps) => {
  const { id } = params;

  return <GenerativeFill id={id} />;
};

export default EditPage;


export const metadata: Metadata = {
  title: "Edit Asset | Cloud Horizon",
  description: "Edit and customize your digital assets with Cloud Horizon's advanced editing tools",
};
