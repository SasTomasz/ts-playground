function logText(text:string) {
    console.log(text);
}

logText("Przykładowy tekst")

function foreverTask(taskName: string) {
    while (true) {
        console.log(`Powtarzam ${taskName} cały czas...`);
    }
}

foreverTask("Jakaś nazwa");