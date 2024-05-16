import IssueStatusBage from "@/app/components/IssueStatusBage";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Box, Button, Card, Flex, Grid, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
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
    <Grid columns={{ initial: "1", md: "2" }} className="mx-w-xl" gap="5">
      <Box>
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
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue?.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
