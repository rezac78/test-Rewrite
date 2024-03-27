import Dashboard from "../../public/img/icon/dashboard.svg";
import Chat from "../../public/img/icon/messages.svg";
import ReWrite from "../../public/img/icon/writing.svg";
import Images from "../../public/img/icon/camera.svg";
import Translate from "../../public/img/icon/language.svg";
import Grammar from "../../public/img/icon/text-grammar 1.svg";
import Code from "../../public/img/icon/code.svg";
import GPT3 from "../../public/img/icon/Avatar ChatGPT.svg";
import GPT4 from "../../public/img/icon/Avatar ChatGPT (1).svg";

export interface NavbarIcons {
  id: number;
  name: string;
  icon: any;
  Link: string;
}
export interface LanguageDrops {
  id: number;
  label: string;
  code: string;
}
export interface EngineDrops {
  id: number;
  label: string;
  code: string;
  icon: any;
}
export const navbarIcons: NavbarIcons[] = [
  { id: 1, name: "Dashboard", icon: Dashboard, Link: "#" },
  { id: 2, name: "Chat", icon: Chat, Link: "#" },
  { id: 3, name: "ReWrite", icon: ReWrite, Link: "#" },
  { id: 4, name: "Images", icon: Images, Link: "#" },
  { id: 5, name: "Translate", icon: Translate, Link: "#" },
  { id: 6, name: "Grammar", icon: Grammar, Link: "#" },
  { id: 7, name: "Code", icon: Code, Link: "#" },
];
export const LanguageDrop: LanguageDrops[] = [
  { id: 1, label: "English", code: "English" },
  { id: 2, label: "Español", code: "Español" },
  { id: 3, label: "Français", code: "Français" },
];

export const EngineDrop: EngineDrops[] = [
  { id: 1, label: "GPT-3.5", code: "GPT-3.5", icon: GPT3 },
  { id: 2, label: "GPT-4", code: "GPT-4", icon: GPT4 },
  { id: 3, label: "Lorem", code: "Lorem", icon: GPT4 },
];
