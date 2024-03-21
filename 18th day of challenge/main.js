// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var computer_programmers = {
    coding_languages: ["Java Script ", "Type script ", "Python"],
    Tools: ["Git ", "Web pack ", "Doccer"],
    software_framework: ["React js ", "Anguler ", "Vue"]
};
var coding_languages = computer_programmers.coding_languages, Tools = computer_programmers.Tools, software_framework = computer_programmers.software_framework;
console.log("Coding Language: ".concat(coding_languages[1], ", Tools: ").concat(Tools[0], ", Software Framework: ").concat(software_framework[0]));
