import React from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            initialValue="default value"
            init={{
              branding: false,
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visulablocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor|  alignleft alighcenter alighright alignjustify | help",
              content_style:
                "body {font-family:Helvetica,Arial,sans-serif; font-size:14px",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
