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
export interface AdvanceOptions {
  id: number;
  label: string;
  NameId: string;
  Data: any;
  selected: string;
  setSelected: any;
}
export interface HistoryData {
  id: number;
  content: string;
  timestamp: string;
  description: string;
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

export const LenghDrop: LanguageDrops[] = [
  { id: 1, label: "Auto", code: "Auto" },
  { id: 2, label: "Short", code: "Short" },
  { id: 3, label: "Medium", code: "Medium" },
  { id: 4, label: "Long", code: "Long" },
];

export const VoiceDrop: LanguageDrops[] = [
  { id: 1, label: "Auto", code: "Auto" },
  { id: 2, label: "Amicable", code: "Amicable" },
  { id: 3, label: "Casual", code: "Casual" },
  { id: 4, label: "Friendly", code: "Friendly" },
  { id: 5, label: "Funny", code: "Funny" },
  { id: 6, label: "Formal", code: "Formal" },
];
export const CreativityDrop: LanguageDrops[] = [
  { id: 1, label: "Repetitive", code: "Repetitive" },
  { id: 2, label: "Deterministic", code: "Deterministic" },
  { id: 3, label: "Original", code: "Original" },
  { id: 4, label: "Creative", code: "Creative" },
  { id: 5, label: "Imaginative", code: "Imaginative" },
];
export const PointDrop: LanguageDrops[] = [
  { id: 1, label: "Default", code: "Default" },
  { id: 2, label: "First Person", code: "First Person" },
  { id: 3, label: "Second Person", code: "Second Person" },
  { id: 4, label: "Third Person", code: "Third Person" },
];

export const Options: AdvanceOptions[] = [
  {
    id: 1,
    label: "Length",
    NameId: "Length-dropdown",
    Data: LenghDrop,
    selected: "selectedLeng",
    setSelected: "setSelectedLeng",
  },
  {
    id: 2,
    label: "Tone of Voice",
    NameId: "Voice-dropdown",
    Data: VoiceDrop,
    selected: "selectedVoice",
    setSelected: "setSelectedVoice",
  },
  {
    id: 3,
    label: "Creativity",
    NameId: "Creativity-dropdown",
    Data: CreativityDrop,
    selected: "selectedCreativity",
    setSelected: "setSelectedCreativity",
  },
  {
    id: 4,
    label: "Point of View",
    NameId: "Point-dropdown",
    Data: PointDrop,
    selected: "selectedPoint",
    setSelected: "setSelectedPoint",
  },
];
export const historyData: HistoryData[] = [
  {
    id: 1,
    content: "Lorem ipsum dolor amet...",
    timestamp: "50 Min ago",
    description: "English",
  },
  {
    id: 2,
    content: "Sed do eiusmod tempor...",
    timestamp: "45 Min ago",
    description: "English",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor amet...",
    timestamp: "50 Min ago",
    description: "English",
  },
  {
    id: 4,
    content: "Sed do eiusmod tempor...",
    timestamp: "45 Min ago",
    description: "English",
  },
  {
    id: 5,
    content: "Lorem ipsum dolor amet...",
    timestamp: "50 Min ago",
    description: "English",
  },
  {
    id: 6,
    content: "Sed do eiusmod tempor...",
    timestamp: "45 Min ago",
    description: "English",
  },
];
