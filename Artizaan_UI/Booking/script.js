document.addEventListener("DOMContentLoaded", function ()
	{
		// Add event listener to the frame-f element for hover effect
		const frameF = document.querySelector(".frame-f");
		frameF.addEventListener("mouseover", function () {
			this.style.transform = "scale(1.05)";
		});
		frameF.addEventListener("mouseout", function () {
			this.style.transform = "scale(1)";
		});
	});
