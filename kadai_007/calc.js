let num = Math.floor(Math.random() * 15);

// もし定数numが10より大きいならば、「定数numは10より大きいです」という文字列を出力する
if (num %3==0) {
  console.log('3の倍数です');
}
else if (num %5==0) {
    console.log('5の倍数です');
  }
else if (num %15==0) {
    console.log('3と5の倍数です');
  } 
else{
    console.log(num)
}