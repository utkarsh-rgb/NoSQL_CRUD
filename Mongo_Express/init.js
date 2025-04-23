const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res) =>{
        console.log("Connectd to db");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let  allChats = [
    {
        from: "Nandu",
        to: "Utkarsh",
        msg: "Hello, how are you?",
        created_at: new Date()
    },
    {
        from: "Utkarsh",
        to: "Priya",
        msg: "Hey Priya! Are you coming to the meetup?",
        created_at: new Date()
    },
    {
        from: "Priya",
        to: "Amit",
        msg: "Yes, Amit, I’ll be there! What about you?",
        created_at: new Date()
    },
    {
        from: "Amit",
        to: "Sara",
        msg: "Sara, have you finished the project?",
        created_at: new Date()
    },
    {
        from: "Sara",
        to: "Nandu",
        msg: "Yes, Nandu, I just submitted it!",
        created_at: new Date()
    }
];
Chat.insertMany(allChats).then((res) =>{
    console.log(res);
})
.catch((res) =>{
    console.log(res);
})