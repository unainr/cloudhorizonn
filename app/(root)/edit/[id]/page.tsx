import GenerativeFill from '@/components/effects/GenerativeFill';
import React from 'react'

interface EditPageProps {
    params: {
      id: string;
    }
  }
const EditPage = async ({ params }: EditPageProps) => {
   
    const { id } = await params;

  return (
    <GenerativeFill id={id}/>
  )
}

export default EditPage