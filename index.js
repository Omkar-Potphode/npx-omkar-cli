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
        }
    }
)