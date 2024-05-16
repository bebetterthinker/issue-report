import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import IssueForm from "../../_components/IssueForm";
interface Props {
  params: { id: string };
}
const EditIssuepage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuepage;
