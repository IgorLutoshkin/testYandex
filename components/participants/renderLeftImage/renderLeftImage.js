function leftImage() {
  let leftImg = activeParticipants - 1;
  if (leftImg < 0) leftImg = data.length - 1;
  listElement.prepend(render(leftImg));
  leftCount(activeParticipants);
  return leftImg;
}
leftImage();