import IssueStatusBage from "@/app/components/IssueStatusBage";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import delay from "delay";
import ReactMarkdown from "react-markdown";
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
      {issue && (
        <>
          <Heading>{issue.title}</Heading>
          <Flex className="space-x-3" my="2">
            <IssueStatusBage status={issue.status as Status} />
            <p>{issue.createdAt.toDateString()}</p>
          </Flex>
          <Card className="prose">
            <ReactMarkdown>{issue.descriptions as string}</ReactMarkdown>
          </Card>
        </>
      )}
      {!issue && <p>Issue not found.</p>}
    </div>
  );
};

export default IssueDetailPage;
