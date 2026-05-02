// 画面遷移
function showScreen(screenName) {
  // すべての画面を非表示
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.add('hidden');
  });
  
  // 指定された画面だけ表示
  document.getElementById(`${screenName}-screen`).classList.remove('hidden');

  // header表示
  if(screenName == "setting" || screenName == "animation" || screenName == "result"){
    document.getElementById(`header`).classList.remove('hidden');
  }
}

// 選択肢追加
function addOption(){
  let option_element = document.getElementById('option-wrapper');
  // 子のアイテム数を数える
  let optionCount = option_element.children.length;

  // optionのHTMLを追加
  let new_element = document.createElement('input');
  optionCount += 1;
  new_element.type = 'text'
  new_element.id = `option${optionCount}`
  new_element.classList.add('option-item', 'bg-sky-900', 'px-4', 'py-2', 'w-64', 'rounded-lg')
  option_element.appendChild(new_element);
}

// 選択肢保存
let optionValues = []

function saveOptions(){
  let optionCount = 1;
  const options = document.querySelectorAll('.option-item')
  options.forEach((optionm, index) =>{
    const option_item = document.getElementById(`option${index + 1}`).value
  // 空でないかチェック
  if(!option_item){
    alert('選択肢を入力してください');
    return;
  }
  // 配列に保存
  optionValues.push(option_item);

  // アニメーション画面へ
  showScreen('animation')
  })
  console.log(optionValues);
}

// 結果表示
function showResult() {
  // ランダムに選択
  const randomIndex = Math.floor(Math.random() * optionValues.length);
  const selectedOption = optionValues[randomIndex];
  console.log(selectedOption)

  // 結果画面へ
  showScreen('result');

  // 結果を表示
  document.getElementById('result-text').textContent = selectedOption;
}