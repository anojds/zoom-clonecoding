const socket = io();


const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
    event.preventDefault();
    const input = document.getElementById("input");
    socket.emit("enter_room", {payload: input.value});
    input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);