import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import prisma from "@/prisma/client";

const createIssueschema = z.object({
  title: z.string().min(1, "title is required.").max(255),
  descriptions: z.string().min(1, "description is required."),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validating the schema
  const validation = createIssueschema.safeParse(body);

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
