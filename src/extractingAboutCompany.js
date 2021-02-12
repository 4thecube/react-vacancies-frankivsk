import cheerio from "cheerio";
import axios from "axios";

async function extractorAbout(link) {
  const { data } = await axios.get(link);
  const $ = cheerio.load(data);
  const about = {};

  $(".vacancy").each((index, element) => {
    const $element = $(element);
    const date = $element.find(".date").text();
    const reqSkills = $element.find(".text.b-typo.vacancy-section p").text();
    const description = $element.find(".sh-info").text().trim();
    const href = $element.find('.vt').attr('href');
    const about = {
        date,
        reqSkills,
      description,
      href
    };

    return about;
  });
  return about;
}

export default extractorAbout;