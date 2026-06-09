const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

if (burger && navbar) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}
const imageLinks = document.querySelectorAll(".image_link a");

imageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.location.href = link.getAttribute("href");
  });
});
const tabs = document.querySelectorAll(".tema_tab");
const contents = document.querySelectorAll(".tema_content");
const projektmappe = document.querySelector(".projektmappe");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const temaId = tab.dataset.tema;
    const farve = tab.dataset.color;

    projektmappe.style.backgroundColor = farve;

    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    document.getElementById(temaId).classList.add("active");
  });
});

const codeImages = {
  tema2: {
    html: ["tema2/tema2_html_1.png", "tema2/tema2_html_2.png", "tema2/tema2_html_3.png"],
    css: ["tema2/tema2_css_1.png", "tema2/tema2_css_2.png", "tema2/tema2_css_3.png"],
  },
  tema3: {
    html: ["tema3/tema3_html_1.png", "tema3/tema3_html_2.png", "tema3/tema3_html_3.png"],
    css: ["tema3/tema3_css_1.png", "tema3/tema3_css_2.png", "tema3/tema3_css_3.png"],
  },
  tema4: {
    html: ["tema4/tema4_html_1.png", "tema4/tema4_html_2.png", "tema4/tema4_html_3.png"],
    css: ["tema4/tema4_css_1.png", "tema4/tema4_css_2.png", "tema4/tema4_css_3.png"],
    java: ["tema4/tema4_java_1.png", "tema4/tema4_java_2.png", "tema4/tema4_java_3.png"],
  },
  tema5: {
    html: ["tema5/tema5_html_1.png", "tema5/tema5_html_2.png", "tema5/tema5_html_3.png", "tema5/tema5_html_4.png"],
    css: ["tema5/tema5_css_1.png", "tema5/tema5_css_2.png", "tema5/tema5_css_3.png", "tema5/tema5_css_4.png", "tema5/tema5_css_5.png", "tema5/tema5_css_6.png", "tema5/tema5_css_7.png"],
    java: ["tema5/tema5_java_1.png", "tema5/tema5_java_2.png", "tema5/tema5_java_3.png", "tema5/tema5_java_4.png", "tema5/tema5_java_5.png", "tema5/tema5_java_6.png"],
  },
};

const codeGrids = document.querySelectorAll(".code_grid");

codeGrids.forEach((grid) => {
  const tema = grid.dataset.tema;
  const buttons = grid.querySelectorAll(".code_btn");
  const texts = grid.querySelectorAll(".code_text");
  const images = grid.querySelectorAll(".code_images img");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const codeType = button.dataset.code;

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      texts.forEach((text) => text.classList.remove("active"));
      grid.querySelector(`.code_text[data-code="${codeType}"]`).classList.add("active");

      images.forEach((img, index) => {
        img.src = codeImages[tema][codeType][index];
      });
    });
  });
});
const processSections = document.querySelectorAll(".processen");
const processImages = {
  tema3: {
    ide: ["tema3/t3_process_ide_1.png", "tema3/t3_process_ide_2.png", "tema3/t3_process_ide_3.png", "tema3/t3_process_ide_4.png", "tema3/t3_process_ide_5.png"],
    design: ["tema3/t3_process_design_1.png", "tema3/t3_process_design_2.png", "tema3/t3_process_design_3.png", "tema3/t3_process_design_4.png", "tema3/t3_process_design_5.png"],
    kodning: ["tema3/t3_process_kodning_1.png", "tema3/t3_process_kodning_2.png", "tema3/t3_process_kodning_3.png", "tema3/t3_process_kodning_4.png", "tema3/t3_process_kodning_5.png"],
  },
  tema4: {
    ide: ["tema4/t4_process_ide_1.png", "tema4/t4_process_ide_2.png", "tema4/t4_process_ide_3.png"],

    design: ["tema4/t4_process_design_1.png", "tema4/t4_process_design_2.png", "tema4/t4_process_design_3.png", "tema4/t4_process_design_4.png"],

    kodning: ["tema4/t4_process_kodning_1.png", "tema4/t4_process_kodning_2.png", "tema4/t4_process_kodning_3.png"],
  },
  tema5: {
    ide: ["tema5/t5_process_ide_1.png", "tema5/t5_process_ide_2.png", "tema5/t5_process_ide_3.png"],

    design: ["tema5/t5_process_design_1.png", "tema5/t5_process_design_2.png", "tema5/t5_process_design_3.png", "tema5/t5_process_design_4.png"],

    kodning: ["tema5/t5_process_kodning_1.png", "tema5/t5_process_kodning_2.png", "tema5/t5_process_kodning_3.png", "tema5/t5_process_kodning_4.png", "tema5/t5_process_kodning_5.png"],
  },
};
processSections.forEach((section) => {
  const buttons = section.querySelectorAll(".process_btn");
  const texts = section.querySelectorAll(".process_text");
  const images = section.querySelectorAll(".process_images img");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.process;

      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      texts.forEach((text) => text.classList.remove("active"));
      section.querySelector(`.process_text[data-process="${type}"]`).classList.add("active");

      if (!section.classList.contains("process_static")) {
        const tema = section.closest(".tema_content").id;

        images.forEach((img, index) => {
          img.src = processImages[tema][type][index];
        });
      }
    });
  });
});
const hash = window.location.hash;

if (hash) {
  const targetTema = document.querySelector(hash);
  const targetTab = document.querySelector(`.tema_tab[data-tema="${hash.replace("#", "")}"]`);

  if (targetTema && targetTab) {
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    targetTema.classList.add("active");
    targetTab.classList.add("active");

    projektmappe.style.backgroundColor = targetTab.dataset.color;
  }
}
