import React, { useEffect, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

const Component = styled.div`
    background: #F5F5F5;
`

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']    
];

const Document = () => {
    const [quill, setQuill] = useState(null);
    const [content, setContent] = useState(""); // Initialize the state for content
    const { id } = useParams();

    useEffect(() => {
        if (quill === null) {
            const quillInstance = new Quill('#container', {
                theme: 'snow',
                modules: { toolbar: toolbarOptions }
            });

            // Set initial content when creating the Quill instance
            const initialContent = '<p>This is some initial content.</p>';
            quillInstance.clipboard.dangerouslyPasteHTML(initialContent);

            setQuill(quillInstance);
        }
    }, [quill]);

    useEffect(() => {
        if (quill !== null) {
            // Attach an event listener to capture changes in Quill
            quill.on('text-change', (delta, oldDelta, source) => {
                if (source === 'user') {
                    const editorContent = quill.root.innerHTML;
                    setContent(editorContent);
                }
            });
        }
    }, [quill]);
console.log(content)
    return (
        <Component>
            <Box className='container1' id='container'></Box>
        </Component>
    )
}

export default Document;
