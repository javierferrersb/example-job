import { writeFileSync } from "fs";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

console.log(
  "This is a test. The result is in the standard output.",
  process.argv,
  lorem.generateParagraphs(7)
);

writeFileSync(
  "test.txt",
  `Hello World. This is a test file testing the output in the file test.txt \n ${lorem.generateParagraphs(
    10
  )}`
);
