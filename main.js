const api = "";
const inp = document.getElementById('inp');
const images = document.getElementById('images');

const getImage = async () => {
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":4,
                "size":"1024x1024"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    const data = await res.json()
    console.log(data)
}