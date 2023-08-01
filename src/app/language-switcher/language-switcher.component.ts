import { Component } from "@angular/core";

@Component({
  selector: "language-switcher",
  templateUrl: "./language-switcher.component.html",
})
export class LanguageSwitcherComponent {
  fontColor = "grey";
  textDecoration = "none";
  listStyle = "none";
  marginLeft = "55vw";

  localesList = [
    { code: "en-US", label: "🇬🇧 English" },
    { code: "uk", label: "🇺🇦 Українська" },
    { code: "de", label: "🇩🇪 Deutsch" },
  ];
}
