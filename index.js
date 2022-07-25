var lastTime = new Date().getTime()

function Update()
{
    const time = new Date().getTime()
    const dif = time-lastTime
    lastTime = time

    if (dif > 1000)
    {
        document.getElementById("title").innerHTML = "HEY YOU CHEATEDDDDDDDDDDDDDDDDDDDDDD!"
    }

    requestAnimationFrame(Update)
}

Update()