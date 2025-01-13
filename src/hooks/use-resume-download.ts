import { api } from "@/lib/axios";
// import { useMutation } from "@tanstack/react-query";
import { useFormContext } from "react-hook-form";

export const useResumeDownload = () => {
  const { getValues } = useFormContext<ResumeData>();

  const handleDownloadResume = async () => {
    const resume = document.getElementById("resume-content");
      
      if (!resume) return;

      const structure = getValues("structure");

      const { data } = await api.post("/resume/download", 
        {
        html: resume.outerHTML,
        structure,
       },
       {responseType: "blob" }
      );

      const url = window.URL.createObjectURL(data);
      
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "curriculo.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
  };

  return { handleDownloadResume, };
};

