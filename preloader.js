let counter = {
  value: 0,
};
let loaderDuration = 10;
let customEase = "M0,0 C0.682,0 0.294,1 1,1";

if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 2; // Remove 'let' to update the existing variable
  counter = {
    value: 75,
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader-number").text(progress); // Ensure this selector matches your HTML (ID or class)
  console.log(`Loader text updated to: ${progress}`);
}

function endLoaderAnimation() {
  console.log("Loader animation ended.");
  $(".trigger").click();
}

let tl = gsap.timeline({ onComplete: endLoaderAnimation });
tl.to(counter, {
  onUpdate: updateLoaderText,
  value: 100,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase),
});
tl.to(
  ".loader-progress",
  {
    width: "100%",
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase),
  },
  0,
);
