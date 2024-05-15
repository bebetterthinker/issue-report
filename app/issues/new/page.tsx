"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueschema } from "@/app/validationSchema";
import z from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueschema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueschema),
  });
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className=" space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            console.log(data);
            router.push("/issues");
          } catch (error) {
            setError("unexpected error occured");
          }
        })}
      >
        <TextField.Root>
          <TextField.Input placeholder="title" {...register("title")} />
        </TextField.Root>
        (<ErrorMessage>{errors.title?.message}</ErrorMessage>
        )
        <Controller
          name="descriptions"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="descriptions" {...field} />
          )}
        />
        (<ErrorMessage>{errors.descriptions?.message}</ErrorMessage>)
        <Button>Submit new Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
