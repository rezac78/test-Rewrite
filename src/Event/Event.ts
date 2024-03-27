import Dashboard from "../../public/img/icon/dashboard.svg";
import Chat from "../../public/img/icon/messages.svg";
import ReWrite from "../../public/img/icon/writing.svg";
import Images from "../../public/img/icon/camera.svg";
import Translate from "../../public/img/icon/language.svg";
import Grammar from "../../public/img/icon/text-grammar 1.svg";
import Code from "../../public/img/icon/code.svg";

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

export const EngineDrop: LanguageDrops[] = [
  { id: 1, label: "Engine 1", code: "1" },
  { id: 2, label: "Engine 2", code: "2" },
  { id: 3, label: "Engine 3", code: "3" },
];
