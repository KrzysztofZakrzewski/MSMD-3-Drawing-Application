// Take all ratio elements with name "option"
const radioButtons = document.getElementsByName("option");


radioButtons.forEach(button => {
    button.addEventListener("change", function() {
        // Chec wich ratio element is marked and execute langue function
      switch (this.value) {
        case "option1":
          // engish
        //   changeLanguageContent("Selected", "", "");
        console.log("eng");

          break;
        case "option2":
          // polish
        //   changeLanguageContent("", "Wybrano", "");
        console.log("pl");
          break;
        case "option3":
          // ukrainian
        //   changeLanguageContent("", "", "Обрано");
        console.log("ekr");
          break;
        default:
          // defolt statement
          console.log("unknown choice");
      }
    });
  });

