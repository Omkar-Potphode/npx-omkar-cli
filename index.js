#!/usr/bin/env node 

import figlet from "figlet";
import gradient from "gradient-string";

console.clear();

//Create a colorful gradient for main title
const titleGradient = gradient("cyan", "magenta", "yellow");

//Generate the main title using figlet
figlet(
    "Omkar Potphode",
    {
        font: "Slant",
        horizontalLayout: "default",
        verticalLayout: "default",
    },
    function (err, data){
        if(err){
            console.log("Something went wrong!!!");
            console.dir(err);
            return;
        } else {
            console.log(titleGradient(data));
            printInfo();
        }
    }
);

const printInfo = async () => {

    //Dynamically import the chalk and boxen modules
    const chalk = (await import("chalk")).default;
    const boxen = (await import("boxen")).default;

    const separator = chalk.magentaBright("\n" + "-".repeat(55) + "\n");

    const info = `
    ${chalk.bold.bgCyan.white("  Name:     ")} ${chalk.cyan("Omkar Potphode")}
    ${chalk.bold.bgBlue.white("  Status:   ")} ${chalk.blue("Code, Coffee, Repeat")}
    ${chalk.bold.bgMagenta.white("  GitHub:   ")} ${chalk.magentaBright("https://github.com/Omkar-Potphode")}
    ${chalk.bold.bgYellow.white("  Website:  ")} ${chalk.yellow("https://omkar-potphode-portfolio-phi.vercel.app/")}

    ${chalk.bold.bgWhiteBright.black(" Skills: ")}

    ${chalk.yellowBright(">")} ${chalk.cyan("Languages:")} JavaScript, TypeScript, Python, SQL
    ${chalk.yellowBright(">")} ${chalk.cyan("Framework:")} React.js, Next.js, Express.js
    ${chalk.yellowBright(">")} ${chalk.cyan("Technologies:")} Node.js, Firebase, Prisma
    ${chalk.yellowBright(">")} ${chalk.cyan("Database:")} MongoDB, PostgreSQL
    ${chalk.yellowBright(">")} ${chalk.cyan("DevOps:")} Docker
    ${chalk.yellowBright(">")} ${chalk.cyan("Tools:")} Git, GitHub

    ${separator}

    ${chalk.bold("Full-stack dev, builds cool stuff, expert Googler")}

    ${separator}

    ${chalk.dim.bgBlack.white("And Thank you so much for checking out my CLI! 🥰🚀")}
    `;

    console.log(
        boxen(info, {
            padding: 1,
            margin: 1,
            borderStyle: "classic",
            borderColor: "cyan",
            backgroundColor: 'black',
        })
    );
}