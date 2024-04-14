function rightImage() {
  let rightImg = activeParticipants + 1;
  if (rightImg >= data.length) rightImg = 0;
  listElement.append(render(rightImg));

  rightCount(activeParticipants);
  return rightImg;
}
rightImage();
