export let isKyr = str => {
  return /[а-яё]/i.test (str);
};

export let getNameLesson = str => {
  let lesson = '';

  if (typeof str == 'string') {
    let revPath = str.split('').reverse().join('');
    //let VRegExp = new RegExp(/(?<=lesson=)([\s\S]*?)(?=(\/|$))/gi);
    let VRegExp = new RegExp(/([\s\S]*?)(?==nossel)/gi);
    let Arrlesson = revPath.match(VRegExp); 

    if (Array.isArray (Arrlesson)) {
      let ArrResultLesson = Arrlesson.filter(plesson => !isEmptyStr(plesson));

      if (ArrResultLesson.length > 0)
        lesson = ArrResultLesson[0].split('').reverse().join('');
    }
  }

  return lesson;
};

export let isEmptyStr = str => {

  if (str != null && typeof str !== "undefined") {
     str = str.trim();
  }
  
  return (!str)

};

export let isTrue = value => {
  if (typeof(value) === 'string'){
      value = value.trim().toLowerCase();
  }
  switch(value){
      case true:
      case "true":
      case 1:
      case "1":
      case "on":
      case "yes":
          return true;
      default: 
          return false;
  }
}