import cheerio from "cheerio";
import axios from "axios";

async function extractor(company) {
      const { data } = await axios.get(
        `https://jobs.dou.ua/vacancies/?city=Ивано-Франковск&search=${company}`
      );
      const $ = cheerio.load(data);
      const jobs = [];
    
      $(".vacancy").each((index, element) => {
        const $element = $(element);
        const title = $element.find(".vt").text();
        const company = $element.find(".company").text();
        const description = $element.find(".sh-info").text().trim();
        const href = $element.find('.vt').attr('href');
        const job = {
          title,
          company,
          description,
          href
        };
    
         jobs.push(job);
      });
     return jobs;
    } 

export default extractor;