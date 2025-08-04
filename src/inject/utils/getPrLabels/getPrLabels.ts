export const getPrLabels = () => {
  const elements = [...document.querySelectorAll(".js-issue-labels > a")];
  const labels = elements.map((element) => (element as HTMLElement).innerText);
  console.log({ elements, labels });
  return labels;
};
