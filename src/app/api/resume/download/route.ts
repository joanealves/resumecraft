import { formatTailwindHTML } from "@/lib/utils";
import puppeteer from "puppeteer";


export const POST = async (request : Request) => {
    try {
        const body = await request.json();
        
        const { html, structure } = body;

        if (!html || !structure) {
            return Response.json(
                {message: "Parâmetros inválidos"},
                {status: 400}
            )
        };

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        await page.setContent(formatTailwindHTML(html));

        const pdf = await page.pdf()
        
        await browser.close();
        
        return new Response (pdf,{
          headers: {
            "Content-type": "application/pdf"
        }
      });

    } catch (error) {
      console.error(error);
      return Response.json(
        {message:"Ocorreu um erro inesperado", error},
        {status:500}
      )  
    }
}