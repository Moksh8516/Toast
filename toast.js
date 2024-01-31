const ToastBox = document.getElementById('toast');
let Success = `<box-icon name='check-shield' animation='burst' color='#49c628' ></box-icon> Successful submit.`;
let error = `<box-icon name= 'error' animation='tada' color='#ef2526' ></box-icon> Please Fix The Error!`;
let message = `<box-icon name='message-error' animation='fade-down' color='#ffa500' ></box-icon> Please Check input Detail!`;
let info = `<box-icon name='info-circle' animation='flshing' color='#1e90ff' ></box-icon> Your Given information.`;

function show(msg) {
  let ShowToast = document.createElement('div');
  ShowToast.classList.add("ShowToast");
  ShowToast.innerHTML = msg;

  ToastBox.appendChild(ShowToast);

  if (msg.includes('error')) {
    ShowToast.classList.add('error');
  }

  if (msg.includes('message')) {
    ShowToast.classList.add('message')
  }

  if (msg.includes('info')) {
    ShowToast.classList.add('info');
  }

  setTimeout(() => {
    ShowToast.remove('ShowToast')
  }, 6000);
}
