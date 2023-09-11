import React, { useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import axios from "axios";
import { jsPDF } from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

// Register the fonts with pdfMake
pdfMake.vfs = pdfFonts.pdfMake.vfs;


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
  const [fromValue, setFromValue] = useState(""); 
  const [toValue, setToValue] = useState("");  
  const [toDate, setDate] = useState("");
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

  
  const handleClick = () => {
    const prompt2 = `${prompt} From: ${fromValue}\nTo: ${toValue}\n\n${content}\n with date ${toDate}`
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/generation",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
      },
      data: {
        providers: "openai",
        text: prompt2,
        temperature: 0.2,
        max_tokens: 250,
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.openai.generated_text);
        // setInitialContent(response.data.openai.generated_text);

        // Decode and set the editor content here
        // const decodedContent = decodeURIComponent(response.data.google.generated_text);
        quill.setText(response.data.openai.generated_text)
        // quill.clipboard.dangerouslyPasteHTML(response.data.openai.generated_text);
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

  const parseHTMLToPdfMake = (htmlContent) => {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;

    const parsedContent = [];

    // Iterate through the child nodes of the div
    for (let i = 0; i < div.childNodes.length; i++) {
      const node = div.childNodes[i];

      if (node.nodeType === 3) {
        // Text node (e.g., text within <p>)
        parsedContent.push({ text: node.textContent, style: 'paragraph' });
      } else if (node.nodeType === 1) {
        // Element node (e.g., <p> or <br>)
        if (node.tagName.toLowerCase() === 'p') {
          // Paragraph tag
          parsedContent.push({ text: node.textContent, style: 'paragraph' });
        } else if (node.tagName.toLowerCase() === 'br') {
          // Line break tag
          parsedContent.push('\n');
        }
      }
    }

    return parsedContent;
  };


  const generatePDF = async () => {
  //   const doc = new jsPDF();
    const editorContent = quill.root.innerHTML;
    const html=`<html>
    <head>
      <title>Parcel Sandbox</title>
  </head>
  <body>${editorContent}</body>
  </html>`;
  //   doc.html(html, {
  //     callback: function (pdf) {
  //       pdf.save('generated.pdf');
  //     }
  //   });
  const parsedContent = parseHTMLToPdfMake(editorContent);

    const documentDefinition = {
      content: [
        {
          text: 'Generated PDF',
          style: 'header',
        },
        parsedContent, // Use the parsed content
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        paragraph: {
          fontSize: 16, // Set the desired font size here (e.g., 16)
          margin: [0, 0, 0, 10],
        },
      },
    };

    // Generate the PDF
    const pdfDoc = pdfMake.createPdf(documentDefinition);

    // Download the PDF
    pdfDoc.download('generated.pdf');
  };

  return (
    <>
      <div>
        <button onClick={handleClick} style={{position:"absolute", top:"359px", left:"75px", backgroundColor: "#ffffff", borderRadius: "10px", border: "2px solid #042699", color: "#042699", height: "40px"}}>Generate Text</button>
        <label style={{position:"absolute",top:"180px", left:"20px", color: "#042699", fontWeight: "600"}}>
          From:  
          <input
            type="text"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            style={{border: "1px solid #042699", borderRadius: "10px", width: "150px", height: "40px", marginLeft: "10px"}}
          />
        </label>
        <label style={{position:"absolute",top:"240px", left:"41px", color: "#042699", fontWeight: "600"}}>
          To: 
          <input
            type="text"
            value={toValue}
            onChange={(e) => setToValue(e.target.value)}
            style={{border: "1px solid #042699", borderRadius: "10px", width: "150px", height: "40px", marginLeft: "10px"}}
          />
        </label>
        <label style={{position:"absolute",top:"298px", left:"20px", color: "#042699", fontWeight: "600"}}>
          Date:
          <input
            type="date"
            value={toDate}
            onChange={(e) => setDate(e.target.value)}
            style={{border: "1px solid #042699", borderRadius: "10px", width: "150px", height: "40px", paddingLeft: "10px", color: "#042699", marginLeft: "10px"}}
          />
        </label>
        <button onClick={generatePDF} style={{position:"absolute", top:"760px", left:"568px", backgroundColor: "#ffffff", borderRadius: "10px", border: "2px solid #042699", color: "#042699", height: "40px"}} >Download PDF</button>
      </div>
      <Component>
        <Box className="container1" id="container"></Box>
      </Component>
    </>
  );
};

export default Document;
