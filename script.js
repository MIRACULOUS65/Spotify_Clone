console.log("let's go with js")

async function  main(){

    let a = await fetch("http://127.0.0.1:5500/songs")
    let response= await a.text();
    console.log(response)
}
main()