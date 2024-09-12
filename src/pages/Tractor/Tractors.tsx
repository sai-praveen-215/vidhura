import { Button, Image, message, Upload, UploadProps } from "antd";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";

function Tractors() {
  const [fileUrl, setFileUrl] = useState<any>(null);
  const [fileType, setFileType] = useState<any>(null);
  const [fileName, setFileName] = useState<string>("file"); // Add fileName state

  const onDownload = (imgUrl: any) => {
    if (fileType === "application/pdf") {
      // If it's a PDF, open in a new tab for preview
      window.open(imgUrl);
    } else {
      // For other file types (e.g., images), download the file with the correct name and extension
      fetch(imgUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.download = fileName; // Use the stored file name
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(url);
          link.remove();
        });
    }
  };

  const props: UploadProps = {
    name: "file",

    onChange(info) {
      const file = info.file.originFileObj;
      if (file) {
        setFileUrl(URL.createObjectURL(file)); // Generate URL for the uploaded file
        setFileType(file.type); // Store the file type (e.g., 'image/jpeg', 'application/pdf')
        setFileName(file.name); // Store the file name with extension
      }

      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Upload {...props}>
        <Button>Add</Button>
      </Upload>

      {/* Conditionally render image or PDF preview button */}
      {fileType && fileType.startsWith("image/") && (
        <Image src={fileUrl} alt="Uploaded file" />
      )}

      {fileUrl && (
        <FaDownload
          onClick={() => {
            onDownload(fileUrl);
          }}
        />
      )}
    </div>
  );
}

export default Tractors;
