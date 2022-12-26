//Кнопрка для срабатывания 
const btn = document.querySelector('.panel__submit');
const pictures = document.querySelector('.pictures');

btn.addEventListener('click', async () => {
  var inputWidth = document.querySelector('.input__width');
  var inputHeight = document.querySelector('.input__height');
  var labelWidth = document.querySelector('.label__width');
  var labelHeight = document.querySelector('.label__height');
  var widthStatus = false
  var heightStatus = false
  if (+inputWidth.value < 100 || +inputWidth.value > 300) {
    labelWidth.classList.remove("width__nshow");
    labelWidth.classList.add("width__show");
    setTimeout(() => {
      labelWidth.classList.remove("width__show");
      labelWidth.classList.add("width__nshow");
      inputWidth.value = '';
    }, 3000);
  } else {
    widthStatus = true
  }
  if (+inputHeight.value < 100 || +inputHeight.value > 300) {
    labelHeight.classList.remove("height__nshow");
    labelHeight.classList.add("height__show");
    setTimeout(() => {
      labelHeight.classList.remove("height__show");
      labelHeight.classList.add("height__nshow");
      inputHeight.value = '';
    }, 3000);
  } else {
    heightStatus = true
  }
  if (widthStatus && heightStatus) {
    const requestResult = await useRequest(+inputWidth.value,+inputHeight.value);
    if (requestResult) {
      picDrawer(requestResult.url)
    }
  }
});

function useRequest(width, height) {
  console.log("useRequest")
  return fetch('https://picsum.photos/'+width+'/'+height)
    .then((response) => {
      return response;
    })
    .catch((error) => { console.log(error) });
};

function picDrawer(picInfo) {
    const pic = `
      <div class="draw">
        <img
          src="${picInfo}"
          class="draw__picture"
        />
      </div>
    `;
  pictures.innerHTML = pic;
}

