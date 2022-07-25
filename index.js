var lastTime = new Date().getTime()

function Update()
{
    const time = new Date().getTime()
    const dif = time-lastTime
    lastTime = time

    if (dif > 1000)
    {
        document.body.classList.add("bodyCheated")
        document.getElementById("title").innerHTML = "HEY YOU CHEATED!"
        document.getElementById("subtext").innerHTML = "How could you!"
    }

    requestAnimationFrame(Update)
}

Update()