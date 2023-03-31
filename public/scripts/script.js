async function login () {

    let email = document.getElementById('email').value
    let senha = document.getElementById('password').value

    if(!email || !senha){
        return
    }

    const req = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            email: document.getElementById('email').value,
            senha: document.getElementById('password').value 
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const res = await req.json()
    console.log(res)
}