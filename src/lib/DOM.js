export let getParentDiv = dropElem => {
  if (!dropElem.parentNode) return null;
  else if (dropElem.tagName == 'DIV') return dropElem;
  else return getParentDiv (dropElem.parentNode);
};
