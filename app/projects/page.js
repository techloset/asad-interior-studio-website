import React from 'react'
import ProjectData from './projectData/projectData';
import { client } from '../../app/lib/contentful';

const page = async() => {
  const response = JSON.stringify(await client.getEntries({ content_type: "project" }));
  return  <ProjectData response={response} />
}

export default page;