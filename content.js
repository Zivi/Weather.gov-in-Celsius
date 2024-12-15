console.log('content scripts started');

document.querySelectorAll('.temp').forEach((temperature) => {
    const numTemp = temperature.innerHTML.match(/\d+/)?.[0];
    if (!numTemp) return;
    const cVal = Math.round(((numTemp - 32) * 5 / 9)* 10)/10;
    temperature.innerHTML += `<br> ${cVal} °C`;
}) 
