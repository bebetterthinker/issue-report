"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  descriptions: string;
}
const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        console.log(data);
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="title" {...register("title")} />
      </TextField.Root>
      <Controller
        name="descriptions"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="descriptions" {...field} />
        )}
      />

      <Button>Submit new Issue</Button>
    </form>
  );
};

export default NewIssuePage;
