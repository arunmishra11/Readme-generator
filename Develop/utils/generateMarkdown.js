// Function to render license badge
function renderLicenseBadge(license) {
  return license
    ? `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`
    : "";
}

// Function to render license link
function renderLicenseLink(license) {
  return license ? `* [License](#license)` : "";
}

// Function to render license section of README
function renderLicenseSection(license) {
  return license
    ? `## License\nThis project is licensed under the [${license}](https://opensource.org/licenses/${license}).`
    : "";
}

// Function to generate table of contents
function generateTableOfContents(data) {
  const sections = [
    "Description",
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Tests",
    "Collaborators",
    "GitHub",
    "Questions",
  ];
  const toc = sections
    .filter((section) => data[section.toLowerCase()])
    .map(
      (section) =>
        `* [${section}](#${section
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")})`
    )
    .join("\n");

  return `## Table of Contents\n${toc}\n`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = generateTableOfContents(data);

  return `# ${data.title}
${renderLicenseBadge(data.license)}

${tableOfContents}

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Collaborators
${data.collaborators}

## GitHub
https://github.com/${data.github}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
