const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('clinck', () => {
    setTimeout(() => {
        console.log('ボタンをクリックしました');    
    }, 2000);
});
