import { Component } from "@angular/core";

@Component({
  selector: "language-switcher",
  templateUrl: "./language-switcher.component.html",
})
export class LanguageSwitcherComponent {
  display = "flex";
  justifyContent = "justify-content";
  fontColor = "grey";
  textDecoration = "none";
  listStyle = "none";

  localesList = [
    { code: "en-US", label: "🇬🇧 English" },
    { code: "uk", label: "🇺🇦 Українська" },
    { code: "de", label: "🇩🇪 Deutsch" },
  ];
}
