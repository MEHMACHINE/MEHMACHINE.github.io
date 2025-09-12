// I don't know what to put here

const canvas = document.querySelector(".myCanvas");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const ctx = canvas.getContext("2D");

ctx.fillStyle = "black";
ctx.fillRect(0,0,100,50);
