// 「画面に入ってきたか」を見張る設定
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // もし要素が画面に入ってきたら
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible'); // 「is-visible」クラスを付ける！
        }
    });
}, {
    threshold: 0.2 // 要素が20%見えたら発動する設定
});

// すべての .fade-in 要素を見張るように命令する
document.querySelectorAll('.fade-in, .line-grow').forEach(el => {
    observer.observe(el);
});