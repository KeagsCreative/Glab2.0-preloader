<script>
  document.addEventListener("DOMContentLoaded", function() {
    let counter = {
      value: 0,
    };
    let loaderDuration = 10;
    let customEase = "M0,0 C0.682,0 0.294,1 1,1";

    if (sessionStorage.getItem("visited") !== null) {
      loaderDuration = 2;
      counter = {
        value: 75,
      };
    }
    sessionStorage.setItem("visited", "true");

    function updateLoaderText() {
      let progress = Math.round(counter.value);
      console.log(`Updating loader text to: ${progress}`);
      document.querySelector(".loader-number").textContent = progress;
    }

    function endLoaderAnimation() {
      console.log("Ending loader animation.");
      document.querySelector(".trigger").click();
    }

    console.log("Document ready, starting animation.");
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
      0
    );
  });
</script>
