import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validating the schema
  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  //   createing new issues

  const newIssue = await prisma.issue.create({
    data: { title: body.title, descriptions: body.descriptions },
  });

  return NextResponse.json(newIssue, { status: 201 });
}
("Required");
