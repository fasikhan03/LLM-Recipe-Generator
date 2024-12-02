document.addEventListener("DOMContentLoaded", function () {
  let stepCounter = 1;

  function addStep() {
    const container = document.getElementById("stepsContainer");
    const stepCard = document.createElement("div");
    stepCard.classList.add("recipe-step-card");
    stepCard.innerHTML = `
            <div class="step-header">Step ${stepCounter}</div>
            <textarea name="step${stepCounter}" rows="2" required placeholder="Describe this step..."></textarea>
            <button type="button" class="remove-step-btn">Remove Step</button>
        `;
    container.appendChild(stepCard);

    const removeBtn = stepCard.querySelector(".remove-step-btn");
    removeBtn.addEventListener("click", function () {
      stepCard.remove();
    });

    stepCounter++;
  }

  document.getElementById("addStepBtn").addEventListener("click", addStep);

  // Add the first step by default
  addStep();
});
