const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
  console.log("click");
  navbar.classList.toggle("nav__expanded");
});

const servicesTabs = document.querySelector(".services__tabs");
const TabsContent = document.querySelectorAll(".tab-content");
const Tabs = document.querySelectorAll(".tab");

servicesTabs.addEventListener("click", function (e) {
  const click = e.target.closest(".tab");
  if (!click) return;

  // remove active
  Tabs.forEach((t) => t.classList.remove("active"));
  TabsContent.forEach((content) => {
    content.classList.remove("active");
  });

  // Add active
  click.classList.add("active");
  TabsContent.forEach((content) => {
    const targeTabContent = document.querySelector(
      `#${click.dataset.tabTarget}`
    );
    targeTabContent.classList.add("active");
  });
});
