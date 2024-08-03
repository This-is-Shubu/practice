document.addEventListener("DOMContentLoaded", () => {
	const totalPages = 10;
	const pagesToShow = 4;
	let currentPage = 1;

	const pagination = document.getElementById("pagination");

	function createPagination() {
		pagination.innerHTML = "";

		// Left arrow
		const leftArrow = document.createElement("li");
		leftArrow.textContent = "<";
		leftArrow.addEventListener("click", () => changePage(currentPage - 1));
		pagination.appendChild(leftArrow);

		// Page numbers
		if (currentPage > 1) {
			pagination.appendChild(createPageItem(1));
		}
		if (currentPage > 3) {
			pagination.appendChild(createDots());
		}
		const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
		const endPage = Math.min(totalPages, startPage + pagesToShow - 1);
		for (let i = startPage; i <= endPage; i++) {
			pagination.appendChild(createPageItem(i));
		}
		if (currentPage < totalPages - 2) {
			pagination.appendChild(createDots());
		}
		if (currentPage < totalPages) {
			pagination.appendChild(createPageItem(totalPages));
		}

		// Right arrow
		const rightArrow = document.createElement("li");
		rightArrow.textContent = ">";
		rightArrow.addEventListener("click", () => changePage(currentPage + 1));
		pagination.appendChild(rightArrow);
	}

	function createPageItem(page) {
		const pageItem = document.createElement("li");
		const link = document.createElement("a");
		link.textContent = page;
		link.href = `page${page}.html`; // Change this to the actual URL of your pages
		if (page === currentPage) {
			link.classList.add("active");
		}
		pageItem.appendChild(link);
		return pageItem;
	}

	function createDots() {
		const dots = document.createElement("li");
		dots.textContent = "...";
		dots.classList.add("dots");
		return dots;
	}

	function changePage(page) {
		if (page < 1 || page > totalPages) return;
		currentPage = page;
		createPagination();
	}

	createPagination();
});
