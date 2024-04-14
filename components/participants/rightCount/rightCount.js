function rightCount(activeParticipants) {
  let countElementPage = listElement.childElementCount;
  let screenWidth_1 = 1126;
  let screenWidth_2 = 729;

  /* экраны до 1126, когда отображается 3 участника */

  let rangeEnd = activeParticipants + 2;

  if (rangeEnd > data.length) {
    rangeEnd -= data.length;
  }

  if (rangeEnd === 0) {
    rangeEnd = data.length;
  }

  counterElement.innerText = rangeEnd + " / " + data.length;

  /* экраны от 1126, когда отображается 2 участника */
  if (window.innerWidth <= screenWidth_1) {
    let rangeStart = activeParticipants + 1;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart > data.length) {
      counterElement.innerText = rangeStart - data.length + " / " + data.length;
    }
    if (rangeStart <= data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }

  /* экраны от 729, когда отображается 1 участник */

  if (window.innerWidth <= screenWidth_2) {
    let rangeStart = activeParticipants;

    if (rangeStart <= countElementPage) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }

    if (rangeStart < data.length) {
      counterElement.innerText = rangeStart + " / " + data.length;
    }
    if (rangeStart === 0) {
      rangeStart = data.length;
      counterElement.innerText = rangeStart + " / " + data.length;
    }
  }
}