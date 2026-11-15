import type { Lang } from "./ui";

import esPersonal from "../data/es/personal.json";
import esExperience from "../data/es/experience.json";
import esProjects from "../data/es/projects.json";
import esCerts from "../data/es/certifications.json";

import enPersonal from "../data/en/personal.json";
import enExperience from "../data/en/experience.json";
import enProjects from "../data/en/projects.json";
import enCerts from "../data/en/certifications.json";

const data = {
  es: {
    personal: esPersonal,
    experience: esExperience,
    projects: esProjects,
    certs: esCerts,
  },
  en: {
    personal: enPersonal,
    experience: enExperience,
    projects: enProjects,
    certs: enCerts,
  },
};

export const getData = (lang: Lang) => data[lang];
