// Take all ratio elements with name "option"
const radioButtons = document.getElementsByName("option");


radioButtons.forEach(button => {
    button.addEventListener("change", function() {
        // Chec wich ratio element is marked and execute langue function
      switch (this.value) {
        case "option1":
          // engish
        //   changeLanguageContent("Selected", "", "");

          break;
        case "option2":
          // polish
        //   changeLanguageContent("", "Wybrano", "");
          break;
        case "option3":
          // ukrainian
        //   changeLanguageContent("", "", "Обрано");
          break;
        default:
          // defolt statement
          console.log("unknown choice");
      }
    });
  });

  