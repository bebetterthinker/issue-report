import { IssueStatusBage } from "@/app/components";
import { Issue, Status } from "@prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
interface Props {
  issue: Issue;
}
const IssueDetail = ({ issue }: Props) => {
  return (
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
  );
};

export default IssueDetail;
