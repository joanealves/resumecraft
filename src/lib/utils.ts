import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sectionIsEmpty =(
  section: ResumeSections,
  data: ResumeContentData
) => {
  switch (section) {
    case "sumary":
      return data.summary === "" || data.sumary === "<p></p>";
    default:
      return data[section].length === 0;
  }
};

export const formatTailwindHTML = (
  html : string) => {
    return `
      <html>
        <head>
           <script src="https://cdn.tailwindcss.com"></script>
        </head>

        <body>
          ${html}
        </body>
      </html>
    
    `
}
