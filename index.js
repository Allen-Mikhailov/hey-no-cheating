var lastTime = new Date().getTime()

function Update()
{
    const time = new Date().getTime()
    const dif = time-lastTime
    lastTime = time

    if (dif > 3000)
    {
        console.log("Cheated")
    }

    requestAnimationFrame(Update)
}

Update()