// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github license] (https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License \n
    This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}\n
  ## Description \n
  ${data.description} \n

  ## Table of Contents \n
  [Installation](#installation) \n
  [Usage](#Usage) \n
  [License](#license) \n
  [Contribution](#contribution) \n
  [Tests](#tests) \n
  [Questions](#questions) \n

  ## Installation \n
  To install necessary dependencies, run the following command: \n
  \`\`\`
  ${data.installation}
  \`\`\` \n
  ## Usage \n
  ${data.usage} \n
  ${renderLicenseSection(data.license)} \n
  ## Contribution \n
  ${data.contribution} \n
  ## Tests \n
  To run test, run the following command(s): \n
  \`\`\`
  ${data.tests}
  \`\`\` \n
  ## Questions \n
  If you have more questions about the repo, open an issue
  or contact me directly at ${data.email}. \n
  You can find more of my work at [${data.github}](https://github.com/${data.github}).`;

}

module.exports = generateMarkdown;
