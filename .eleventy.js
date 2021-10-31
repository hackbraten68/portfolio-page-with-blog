const { DateTime } = require("luxon")

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/")
    eleventyConfig.addPassthroughCopy("./src/css/styles.css")

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
    })

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}