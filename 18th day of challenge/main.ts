// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let computer_programmers = {
    coding_languages : ["Java Script ", "Type script ", "Python"],
    Tools : ["Git ", "Web pack ", "Doccer" ],
    software_framework : ["React js ", "Anguler ", "Vue"]
}
let {coding_languages , Tools , software_framework} = computer_programmers
console.log(`Coding Language: ${coding_languages[1]}, Tools: ${Tools[0]}, Software Framework: ${software_framework[0]}`)