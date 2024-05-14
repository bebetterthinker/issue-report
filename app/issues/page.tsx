import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueesPage = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">new Issues</Link>
      </Button>
    </div>
  );
};

export default IssueesPage;
