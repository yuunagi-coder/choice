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
  let new_option_item_box = document.createElement('div');
  new_option_item_box.classList.add('option-item-box');

  let new_input = document.createElement('input');
  optionCount += 1;
  new_input.type = 'text'
  new_input.id = `option${optionCount}`
  new_input.classList.add('option-item', 'bg-sky-900', 'px-4', 'py-2', 'w-64', 'rounded-lg')
  
  let new_deleteBtn = document.createElement('button');
  new_deleteBtn.textContent = '×'
  new_deleteBtn.addEventListener('click',() => {
    new_option_item_box.remove();
  })

  new_option_item_box.appendChild(new_input);
  new_option_item_box.appendChild(new_deleteBtn);
  option_element.appendChild(new_option_item_box);
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
  selectingAnimation('animation')
  })

}

// 選択中
function selectingAnimation(){
  showScreen('animation')
    setTimeout(() => {
    document.getElementById(`result-btn`).classList.remove('hidden');
    }, 5000);  
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