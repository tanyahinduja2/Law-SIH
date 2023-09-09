import React, { useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import axios from "axios";

const Component = styled.div`
  background: #f5f5f5;
`;

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
   
];

const Document = () => {
  const [quill, setQuill] = useState(null);
  const [content, setContent] = useState(""); // Initialize the state for content
  const { title, prompt } = useParams();
  const [initialContent, setInitialContent] = useState(`

  <br>Dear [Name],<br><br>
  This letter is to confirm that [Name] hereby assigns all rights, title, and interest in and to the copyright of [Description of Work] (the “Work”) to [Name of Assignee].<br><br>
  The Work was created by [Name] on [Date]. [Name] hereby represents and warrants that [he/she] is the sole author and owner of the Work and that [he/she] has not assigned or otherwise transferred any rights in the Work to any other person or entity.<br><br>
  [Name] hereby agrees to execute any additional documents and perform any additional acts that may be necessary to vest in [Name of Assignee] all right, title, and interest in and to the copyright of the Work.<br><br>
  Sincerely,<br><br>
  [Name]
  `);

  useEffect(() => {
    if (quill === null) {
      const quillInstance = new Quill("#container", {
        theme: "snow",
        modules: { toolbar: toolbarOptions },
      });
      console.log(initialContent);

      // Encode the initialContent and then paste it into the editor
      // const encodedContent = encodeURIComponent(initialContent);
      quillInstance.clipboard.dangerouslyPasteHTML(initialContent);

      setQuill(quillInstance);
    }
  }, [quill, initialContent]);

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
    },
    data: {
      providers: "openai",
      text: prompt,
      temperature: 0.2,
      max_tokens: 250,
    },
  };

  const handleClick = () => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.openai.generated_text);
        setInitialContent(response.data.openai.generated_text);

        // Decode and set the editor content here
        // const decodedContent = decodeURIComponent(response.data.google.generated_text);
        quill.clipboard.dangerouslyPasteHTML(response.data.openai.generated_text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (quill !== null) {
      quill.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          const editorContent = quill.root.innerHTML;
          setContent(editorContent);
        }
      });
    }
  }, [quill]);

  console.log(content);
  return (
    <>
      <button onClick={handleClick}>press to fire request</button>
      <Component>
        <Box className="container1" id="container"></Box>
      </Component>
    </>
  );
};

export default Document;
