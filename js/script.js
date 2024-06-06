// ini js

// let name = prompt('Sebelum melanjutkan, siapakah nama Anda?')
// document.getElementById('name').innerHTML = name


function replacename() { 
    let name = prompt("halo siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById('ganti-nama').addEventListener("click", function() {
    replacename()
})



function validateForm() {
    const nama = document.forms["form-input"]["nama"].value;
    const tglLahir = document.forms["form-input"]["tgl-lahir"].value;
    const jkel = document.forms["form-input"]["jkel"].value;
    const pesan = document.forms["form-input"]["pesan"].value;


    if (nama == '' || tglLahir == '' || jkel == '' || pesan == '') {
        document.getElementById("error-msg").innerHTML = "Form tidak boleh ada yang kosong!"
        console.log (pesan)
        
        return false
    }

    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleDateString();

    document.getElementById("error-msg");
    setSenderform(nama, tglLahir, jKel, pesan);

    return false;

}

function displayResult() {
    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleDateString();
    
    document.getElementById("error-msg").innerHTML = "";
    setSenderform(nama, tglLahir, jkel, pesan, date, time);

    return false;

}



function setSenderform(nama, tglLahir, jkel, pesan, date, time){
    document.getElementById("current-date").innerHTML = date;
    document.getElementById("current-time").innerHTML = time;
    document.getElementById("user-nama").innerHTML = dnama;
    document.getElementById("user-tgl-lahir").innerHTML = tglLahir;
    document.getElementById("user-jkel").innerHTML = jkel;
    document.getElementById("user-pesan").innerHTML = pesan;
    
}


