import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3  max-w-2xl mx-auto min-h-screen">
      <h1 className=" text-center text-3xl my-7 font-semibold">
        {" "}
        Create a post
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            text="text"
            placeholder="Title "
            required
            id="title"
            className="felx-1"
          />
          <Select>
            <option value="uncategorized"> Select a category</option>
            <option value="Metin2"> Metin2</option>
            <option value="Rust"> Rust</option>
            <option value="league of legends"> league of legends</option>
          </Select>
        </div>
        <div
          className="flex gap-4 items-center justify-between border-4
          border-teal-500 border-dotted"
        >
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            {" "}
            Upload image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="write something..."
          className="h-72 mv-12"
          required
        />
        <Button type='submit' gradientDuoTone="purpleToBlue" >Puplish</Button>
      </form>
    </div>
  );
}
