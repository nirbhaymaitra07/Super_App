import anime from "animejs";
export const wait = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));



export const simulateClick = (element) => {
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
};
export const simulateMouseIn = (element) => {
  const event = new MouseEvent("mouseenter", {
    view: window,
  });
  element.dispatchEvent(event);
};


export const simulateHover = async (element, className) => {
  element.classList.add(className);
  await wait(1000);
  element.classList.remove(className);
};

export const simulateHoverAndClick = async (element, className) => {
  element.classList.add(className);
  await wait(1000);
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
  element.classList.remove(className);
};

export const addClass = async (element, className) => {
  element.classList.add(className);
};

export const removeClass = async (element, className) => {
  element.classList.remove(className);
};

export const simulateVerticalScroll = async (
  element,
  distance,
  duration = 1000
) => {
  return new Promise(async (resolve) => {
    anime({
      targets: element,
      scrollTop: distance, // Adjust this value to control the scroll position
      duration: duration, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Easing function
    });
    await wait(duration);
    resolve();
  });
};

export const simulateHorizontalScroll = async (
  element,
  distance,
  duration = 1000
) => {
  return new Promise(async (resolve) => {
    anime({
      targets: element,
      scrollLeft: distance, // Adjust this value to control the scroll position
      duration: duration, // Animation duration in milliseconds
      easing: "easeInOutQuad", // Easing function
    });
    await wait(duration);
    resolve();
  });
};
