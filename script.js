const select = document.getElementById('key');

for (let i = 0; i <= 999; i++) {
    const opt = document.createElement('option');
    const val = i.toString().padStart(3, '0');
    opt.value = val;
    opt.textContent = val;
    select.appendChild(opt);
}