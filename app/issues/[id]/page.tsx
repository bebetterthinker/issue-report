import prisma from "@/prisma/client";
import React from "react";
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  return (
    <div>
      <p>{issue?.title}</p>
      <p>{issue?.descriptions}</p>
      <p>{issue?.createdAt.toDateString()}</p>
      <p>{issue?.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
