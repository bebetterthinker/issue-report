import { NextRequest, NextResponse } from "next/server";
import z from 'zod'
import prisma from "@/prisma/client";

const createIssueSchema=z.object({
    title:z.string().max(255),
    description:z.string().min(1)
})

export  async function POST(request:NextRequest){
const body=await request.json()
const validation=createIssueSchema.safeParse(body)
if(!validation.success)
return NextResponse.json(validation.error.errors,{status:400})

const createIssue= await prisma.issue.create({
    data:{
        title:body.title,
        description:body.description
    }
})
return NextResponse.json(createIssue,{status:201})

 }
 