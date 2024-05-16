import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import EditIssueButton from "./edit/EditIssueButton";
import IssueDetail from "./edit/IssueDetail";
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
        {issue && <IssueDetail issue={issue} />}
        {!issue && <p>Issue not found.</p>}
      </Box>
      <Box>{issue && <EditIssueButton issueId={issue?.id} />}</Box>
    </Grid>
  );
};

export default IssueDetailPage;
