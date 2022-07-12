const pic = {
    uniform: "https://spy-family.net/assets/img/common/header_bottomimg_3.png",
    icecream: "https://spy-family.net/assets/img/common/header_bottomimg_3_family.png",
    uniform_large: "https://spy-family.net/assets/img/top/chara_anya_1.png",
    casual_large: "https://spy-family.net/assets/img/top/chara_anya_2.png",
    avatars: [],
};

for (let i = 1; i <= 40; i++) {
    pic.avatars[i] = `https://spy-family.net/assets/img/special/anya/${i
        .toString()
        .padStart(2, "0")}.png`;
}
pic.avatars.push(
    "images/group.jpg",
    "images/group1.jpg",
    "images/group2.jpg",
    "images/group3.jpg",
    "images/group4.jpg",
    "images/group6.jpg",
    "images/group7.jpg",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
);

const titles = ["Hi~", "Welecome", "How are you?"];

const about = [
    "My name is YI-CHIH. I am 16 years old now!",
    "I am studing in HCCVS.",
    "",
    "This summer I went to NTNU CSIE Camp to learn how to code.",
    "During the camp, I learned how to: ",
    "  - Build SPA Website with frontend framework Vue and Tailwind.",
    "  - Develop efficiently with Node.js ecosystem.",
    "  - Design and develop a gomoku gaming agent with Python.",
    "  - Operate Linux system with common commands.",
    "  - Use Git and GitHub to work on projects.",
    ""
].join("\n");

const projects = [
    {
        name: "My Portfolio Website",
        description: "A portfolio website for myself that I developed in NTNU CSIE Camp.",
        image: "images/web_photo.png",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://yi-chih-0126.github.io/",
    },
    {
        name: "AI Gomoku Gaming Agent",
        description: "A gomoku gaming agent with Python that I designed in NTNU CSIE Camp.",
        image: "images/gobang.png",
        skills: ["Python", "Algorithm", "Gomoku"],
        url: "",
    },
    {
        name: "Tablecloth beautify",
        description: "Use Rainmeter to beautify our tablecloth",
        image: "images/window.PNG",
        skills: ["Rainmeter"],
        url: "",
    },
    {
        name: "Linux command and script",
        description: "Learning how to use Linux's commands and creat a script",
        image: "images/linux.png",
        skills: ["Linux commands"],
        url: "",
    },
];

export { pic, titles, about, projects };
