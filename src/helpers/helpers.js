export const parseNumInMonth = (num) =>{
    switch(num){
        case 0:
            return 'январь';
        case 1:
            return 'февраль';
        case 2:
            return 'март';
        case 3:
            return 'апрель';
        case 4:
            return 'май';
        case 5:
            return 'июнь';
        case 6:
            return 'июль';
        case 7:
            return 'август';
        case 8:
            return 'сентябрь';
        case 9:
            return 'октябрь';
        case 10:
            return 'ноябрь';
        case 11:
            return 'декабрь';
        default:
            return 'январь'
    }
}
export const runOnKeys = (func, ...rest) => {
  let set = new Set();

  const doFunc = e => {
    for (let key of rest) {
      if (key === e.key) set.add(key);
    }

    if (set.size === rest.length) {
      set.clear();
      func();
    }
  };
  const reSet = e => set.clear();

  document.addEventListener('keydown', doFunc);
  document.addEventListener('keyup', reSet);
};

export function focusOn(el){
    return el.focus()
}